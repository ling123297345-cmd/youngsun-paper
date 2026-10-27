-- Run as the project administrator after applying both hardening migrations.
-- No test accounts or records are created; all session changes are rolled back.
begin;

do $$
begin
  if pg_get_functiondef('public.set_cms_user_access(uuid,text,boolean)'::regprocedure)
      not ilike '%current_cms_role() is distinct from ''admin''%' then
    raise exception 'Missing fail-closed administrator guard';
  end if;
  if has_function_privilege('anon', 'public.set_cms_user_access(uuid,text,boolean)', 'EXECUTE') then
    raise exception 'Anonymous users can execute the CMS access function';
  end if;
  if has_column_privilege('authenticated', 'public.cms_users', 'role', 'UPDATE')
     or has_column_privilege('authenticated', 'public.cms_users', 'is_active', 'UPDATE') then
    raise exception 'Browser clients can directly update CMS privileges';
  end if;
end;
$$;

set local role authenticated;
select set_config('request.jwt.claim.sub', '', true);
select set_config('request.jwt.claims', '{"sub":"00000000-0000-4000-8000-000000000000","role":"authenticated","aal":"aal1"}', true);

do $$
begin
  if public.is_cms_user() is distinct from false then
    raise exception 'An unknown user was accepted as CMS staff';
  end if;
  begin
    perform public.set_cms_user_access(null, 'editor', true);
    raise exception 'An unknown user bypassed the administrator guard';
  exception when insufficient_privilege then
    null;
  end;
end;
$$;

rollback;
