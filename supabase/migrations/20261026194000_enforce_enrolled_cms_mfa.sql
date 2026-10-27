begin;

-- Keep existing users reachable; once a user verifies an MFA factor, every CMS
-- mutation requires an AAL2 session. Public published content remains readable.
create or replace function public.cms_mfa_satisfied()
returns boolean language sql stable security definer set search_path = ''
as $$
  select (select auth.uid()) is not null and (
    coalesce((select auth.jwt())->>'aal' = 'aal2', false)
    or not exists (
      select 1 from auth.mfa_factors
      where user_id = (select auth.uid()) and status = 'verified'
    )
  );
$$;

create or replace function public.current_cms_role()
returns text language sql stable security definer set search_path = ''
as $$
  select role from public.cms_users
  where id = (select auth.uid()) and is_active = true
    and public.cms_mfa_satisfied();
$$;

create or replace function public.is_cms_user()
returns boolean language sql stable security definer set search_path = ''
as $$
  select public.cms_mfa_satisfied() and exists (
    select 1 from public.cms_users
    where id = (select auth.uid()) and is_active = true
  );
$$;

alter policy cms_users_update_own_profile on public.cms_users
using (id = (select auth.uid()) and is_active = true and public.cms_mfa_satisfied())
with check (id = (select auth.uid()) and is_active = true and public.cms_mfa_satisfied());

revoke all on function public.cms_mfa_satisfied() from public, anon;
grant execute on function public.cms_mfa_satisfied() to authenticated;
revoke all on function public.current_cms_role() from public, anon;
revoke all on function public.is_cms_user() from public, anon;
grant execute on function public.current_cms_role() to authenticated;
grant execute on function public.is_cms_user() to authenticated;

commit;
