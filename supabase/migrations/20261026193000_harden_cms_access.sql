begin;

-- An absent or inactive role must fail closed, not fall through a NULL comparison.
create or replace function public.set_cms_user_access(target_user_id uuid, target_role text, target_active boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select auth.uid()) is null or public.current_cms_role() is distinct from 'admin' then
    raise exception 'Administrator access required' using errcode = '42501';
  end if;
  if target_role is null or target_role not in ('admin', 'editor') or target_active is null then
    raise exception 'Invalid CMS access settings' using errcode = '22023';
  end if;
  if target_user_id = (select auth.uid()) and (target_role <> 'admin' or not target_active) then
    raise exception 'Administrators cannot remove their own administrator access' using errcode = '42501';
  end if;

  update public.cms_users
  set role = target_role, is_active = target_active, updated_at = now()
  where id = target_user_id;
  if not found then
    raise exception 'CMS user not found' using errcode = 'P0002';
  end if;
end;
$$;

revoke all on function public.set_cms_user_access(uuid, text, boolean) from public, anon;
grant execute on function public.set_cms_user_access(uuid, text, boolean) to authenticated;

drop trigger if exists cms_users_audit on public.cms_users;
create trigger cms_users_audit after update on public.cms_users
for each row execute function public.write_cms_audit_log();

commit;
