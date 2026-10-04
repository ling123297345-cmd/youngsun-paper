begin;

create extension if not exists pgcrypto with schema extensions;

create table public.cms_users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index cms_users_email_lower_idx on public.cms_users (lower(email));
create index cms_users_active_role_idx on public.cms_users (is_active, role);

create table public.product_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  name_en text not null,
  name_es text,
  description_en text,
  description_es text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_by uuid references public.cms_users(id) on delete set null,
  updated_by uuid references public.cms_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index product_categories_active_sort_idx on public.product_categories (is_active, sort_order);
create index product_categories_created_by_idx on public.product_categories (created_by);
create index product_categories_updated_by_idx on public.product_categories (updated_by);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  category_slug text not null references public.product_categories(slug) on update cascade,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  sort_order integer not null default 0,
  name_en text not null,
  name_es text,
  tagline_en text,
  tagline_es text,
  description_en text,
  description_es text,
  specs_en jsonb not null default '[]'::jsonb check (jsonb_typeof(specs_en) = 'array'),
  specs_es jsonb not null default '[]'::jsonb check (jsonb_typeof(specs_es) = 'array'),
  features_en jsonb not null default '[]'::jsonb check (jsonb_typeof(features_en) = 'array'),
  features_es jsonb not null default '[]'::jsonb check (jsonb_typeof(features_es) = 'array'),
  applications_en jsonb not null default '[]'::jsonb check (jsonb_typeof(applications_en) = 'array'),
  applications_es jsonb not null default '[]'::jsonb check (jsonb_typeof(applications_es) = 'array'),
  variants_en jsonb not null default '[]'::jsonb check (jsonb_typeof(variants_en) = 'array'),
  variants_es jsonb not null default '[]'::jsonb check (jsonb_typeof(variants_es) = 'array'),
  commercial_info jsonb not null default '{}'::jsonb check (jsonb_typeof(commercial_info) = 'object'),
  main_image_path text,
  main_image_alt_en text,
  main_image_alt_es text,
  related_product_slugs text[] not null default '{}',
  related_industry_slugs text[] not null default '{}',
  seo_title_en text,
  seo_title_es text,
  seo_description_en text,
  seo_description_es text,
  revision integer not null default 1 check (revision > 0),
  created_by uuid references public.cms_users(id) on delete set null,
  updated_by uuid references public.cms_users(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index products_category_status_sort_idx on public.products (category_slug, status, sort_order);
create index products_status_published_idx on public.products (status, published_at desc);
create index products_created_by_idx on public.products (created_by);
create index products_updated_by_idx on public.products (updated_by);

create table public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  storage_path text not null unique,
  image_type text not null default 'gallery' check (image_type in ('main', 'detail', 'application', 'packaging', 'gallery')),
  alt_en text,
  alt_es text,
  caption_en text,
  caption_es text,
  sort_order integer not null default 0,
  width integer check (width is null or width > 0),
  height integer check (height is null or height > 0),
  file_size integer check (file_size is null or file_size >= 0),
  created_by uuid references public.cms_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index product_images_product_sort_idx on public.product_images (product_id, sort_order);
create index product_images_created_by_idx on public.product_images (created_by);

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  title text not null,
  excerpt text,
  content_markdown text not null default '',
  category text,
  tags text[] not null default '{}',
  cover_image_path text,
  cover_image_alt text,
  seo_title text,
  seo_description text,
  faq jsonb not null default '[]'::jsonb check (jsonb_typeof(faq) = 'array'),
  related_product_slugs text[] not null default '{}',
  related_post_slugs text[] not null default '{}',
  author_name text not null default 'YOUNGSUN PAPER',
  reading_time_minutes integer check (reading_time_minutes is null or reading_time_minutes > 0),
  revision integer not null default 1 check (revision > 0),
  created_by uuid references public.cms_users(id) on delete set null,
  updated_by uuid references public.cms_users(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index blog_posts_status_published_idx on public.blog_posts (status, published_at desc);
create index blog_posts_category_idx on public.blog_posts (category);
create index blog_posts_created_by_idx on public.blog_posts (created_by);
create index blog_posts_updated_by_idx on public.blog_posts (updated_by);

create table public.blog_images (
  id uuid primary key default gen_random_uuid(),
  blog_post_id uuid not null references public.blog_posts(id) on delete cascade,
  storage_path text not null unique,
  image_type text not null default 'content' check (image_type in ('cover', 'content')),
  alt_text text,
  caption text,
  sort_order integer not null default 0,
  width integer check (width is null or width > 0),
  height integer check (height is null or height > 0),
  file_size integer check (file_size is null or file_size >= 0),
  created_by uuid references public.cms_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index blog_images_post_sort_idx on public.blog_images (blog_post_id, sort_order);
create index blog_images_created_by_idx on public.blog_images (created_by);

create table public.cms_audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid references public.cms_users(id) on delete set null,
  table_name text not null,
  record_id uuid,
  action text not null check (action in ('INSERT', 'UPDATE', 'DELETE')),
  old_data jsonb,
  new_data jsonb,
  created_at timestamptz not null default now()
);

create index cms_audit_log_record_idx on public.cms_audit_log (table_name, record_id, created_at desc);
create index cms_audit_log_actor_idx on public.cms_audit_log (actor_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.current_cms_role()
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select role
  from public.cms_users
  where id = (select auth.uid())
    and is_active = true;
$$;

create or replace function public.is_cms_user()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.cms_users
    where id = (select auth.uid())
      and is_active = true
  );
$$;

create or replace function public.handle_new_cms_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.cms_users (id, email, display_name, role, is_active)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(coalesce(new.email, ''), '@', 1)),
    case when lower(coalesce(new.email, '')) = 'ling123297345@gmail.com' then 'admin' else 'editor' end,
    lower(coalesce(new.email, '')) = 'ling123297345@gmail.com'
  )
  on conflict (id) do update
    set email = excluded.email,
        display_name = coalesce(public.cms_users.display_name, excluded.display_name),
        updated_at = now();
  return new;
end;
$$;

create or replace function public.set_cms_user_access(target_user_id uuid, target_role text, target_active boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if public.current_cms_role() <> 'admin' then
    raise exception 'Administrator access required';
  end if;
  if target_role not in ('admin', 'editor') then
    raise exception 'Invalid CMS role';
  end if;
  if target_user_id = (select auth.uid()) and target_active = false then
    raise exception 'Administrators cannot deactivate their own account';
  end if;

  update public.cms_users
  set role = target_role,
      is_active = target_active,
      updated_at = now()
  where id = target_user_id;

  if not found then
    raise exception 'CMS user not found';
  end if;
end;
$$;

create or replace function public.write_cms_audit_log()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.cms_audit_log (actor_id, table_name, record_id, action, old_data, new_data)
  values (
    (select auth.uid()),
    tg_table_name,
    case when tg_op = 'DELETE' then old.id else new.id end,
    tg_op,
    case when tg_op in ('UPDATE', 'DELETE') then to_jsonb(old) else null end,
    case when tg_op in ('INSERT', 'UPDATE') then to_jsonb(new) else null end
  );
  return case when tg_op = 'DELETE' then old else new end;
end;
$$;

create trigger cms_users_set_updated_at before update on public.cms_users
for each row execute function public.set_updated_at();
create trigger product_categories_set_updated_at before update on public.product_categories
for each row execute function public.set_updated_at();
create trigger products_set_updated_at before update on public.products
for each row execute function public.set_updated_at();
create trigger product_images_set_updated_at before update on public.product_images
for each row execute function public.set_updated_at();
create trigger blog_posts_set_updated_at before update on public.blog_posts
for each row execute function public.set_updated_at();
create trigger blog_images_set_updated_at before update on public.blog_images
for each row execute function public.set_updated_at();

create trigger products_audit after insert or update or delete on public.products
for each row execute function public.write_cms_audit_log();
create trigger blog_posts_audit after insert or update or delete on public.blog_posts
for each row execute function public.write_cms_audit_log();

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert or update of email, raw_user_meta_data on auth.users
for each row execute function public.handle_new_cms_user();

insert into public.product_categories (slug, name_en, name_es, description_en, description_es, sort_order)
values
  ('package-board', 'Packaging Board', 'Cartón para Embalaje', 'Structural paperboard for packaging, printing and converting.', 'Cartones estructurales para embalaje, impresión y conversión.', 10),
  ('culture-paper', 'Culture Paper', 'Papel Cultural', 'Printing and publishing papers for commercial communication.', 'Papeles de impresión y edición para comunicación comercial.', 20),
  ('fancy-paper', 'Fancy Paper', 'Papel Especial', 'Decorative papers with distinctive colors, textures and finishes.', 'Papeles decorativos con colores, texturas y acabados distintivos.', 30),
  ('food-packaging', 'Food Packaging Paper', 'Papel para Alimentos', 'Food-contact paper for cups, wraps and takeaway packaging.', 'Papel para contacto alimentario, vasos, envolturas y envases para llevar.', 40)
on conflict (slug) do nothing;

alter table public.cms_users enable row level security;
alter table public.product_categories enable row level security;
alter table public.products enable row level security;
alter table public.product_images enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_images enable row level security;
alter table public.cms_audit_log enable row level security;

create policy cms_users_read_self_or_admin on public.cms_users
for select to authenticated
using (id = (select auth.uid()) or public.current_cms_role() = 'admin');

create policy cms_users_update_own_profile on public.cms_users
for update to authenticated
using (id = (select auth.uid()) and is_active = true)
with check (id = (select auth.uid()) and is_active = true);

create policy categories_public_read on public.product_categories
for select to anon, authenticated
using (is_active = true);
create policy categories_staff_read on public.product_categories
for select to authenticated
using (public.is_cms_user());
create policy categories_staff_insert on public.product_categories
for insert to authenticated
with check (public.is_cms_user());
create policy categories_staff_update on public.product_categories
for update to authenticated
using (public.is_cms_user())
with check (public.is_cms_user());
create policy categories_admin_delete on public.product_categories
for delete to authenticated
using (public.current_cms_role() = 'admin');

create policy products_public_read_published on public.products
for select to anon, authenticated
using (status = 'published');
create policy products_staff_read_all on public.products
for select to authenticated
using (public.is_cms_user());
create policy products_staff_insert on public.products
for insert to authenticated
with check (public.is_cms_user());
create policy products_staff_update on public.products
for update to authenticated
using (public.is_cms_user())
with check (public.is_cms_user());
create policy products_admin_delete on public.products
for delete to authenticated
using (public.current_cms_role() = 'admin');

create policy product_images_public_read on public.product_images
for select to anon, authenticated
using (exists (select 1 from public.products where products.id = product_images.product_id and products.status = 'published'));
create policy product_images_staff_read on public.product_images
for select to authenticated
using (public.is_cms_user());
create policy product_images_staff_insert on public.product_images
for insert to authenticated
with check (public.is_cms_user());
create policy product_images_staff_update on public.product_images
for update to authenticated
using (public.is_cms_user())
with check (public.is_cms_user());
create policy product_images_admin_delete on public.product_images
for delete to authenticated
using (public.current_cms_role() = 'admin');

create policy blog_posts_public_read_published on public.blog_posts
for select to anon, authenticated
using (status = 'published');
create policy blog_posts_staff_read_all on public.blog_posts
for select to authenticated
using (public.is_cms_user());
create policy blog_posts_staff_insert on public.blog_posts
for insert to authenticated
with check (public.is_cms_user());
create policy blog_posts_staff_update on public.blog_posts
for update to authenticated
using (public.is_cms_user())
with check (public.is_cms_user());
create policy blog_posts_admin_delete on public.blog_posts
for delete to authenticated
using (public.current_cms_role() = 'admin');

create policy blog_images_public_read on public.blog_images
for select to anon, authenticated
using (exists (select 1 from public.blog_posts where blog_posts.id = blog_images.blog_post_id and blog_posts.status = 'published'));
create policy blog_images_staff_read on public.blog_images
for select to authenticated
using (public.is_cms_user());
create policy blog_images_staff_insert on public.blog_images
for insert to authenticated
with check (public.is_cms_user());
create policy blog_images_staff_update on public.blog_images
for update to authenticated
using (public.is_cms_user())
with check (public.is_cms_user());
create policy blog_images_admin_delete on public.blog_images
for delete to authenticated
using (public.current_cms_role() = 'admin');

create policy audit_log_admin_read on public.cms_audit_log
for select to authenticated
using (public.current_cms_role() = 'admin');

revoke all on table public.cms_users from anon, authenticated;
revoke all on table public.product_categories from anon, authenticated;
revoke all on table public.products from anon, authenticated;
revoke all on table public.product_images from anon, authenticated;
revoke all on table public.blog_posts from anon, authenticated;
revoke all on table public.blog_images from anon, authenticated;
revoke all on table public.cms_audit_log from anon, authenticated;

grant usage on schema public to anon, authenticated;
grant select on table public.product_categories, public.products, public.product_images, public.blog_posts, public.blog_images to anon;
grant select, insert, update on table public.product_categories, public.products, public.product_images, public.blog_posts, public.blog_images to authenticated;
grant delete on table public.product_categories, public.products, public.product_images, public.blog_posts, public.blog_images to authenticated;
grant select on table public.cms_users, public.cms_audit_log to authenticated;
grant update (display_name) on table public.cms_users to authenticated;

revoke all on function public.current_cms_role() from public;
revoke all on function public.is_cms_user() from public;
revoke all on function public.set_cms_user_access(uuid, text, boolean) from public;
grant execute on function public.current_cms_role() to authenticated;
grant execute on function public.is_cms_user() to authenticated;
grant execute on function public.set_cms_user_access(uuid, text, boolean) to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cms-media',
  'cms-media',
  true,
  12582912,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

create policy cms_media_public_read on storage.objects
for select to anon, authenticated
using (bucket_id = 'cms-media');
create policy cms_media_staff_insert on storage.objects
for insert to authenticated
with check (bucket_id = 'cms-media' and public.is_cms_user());
create policy cms_media_staff_update on storage.objects
for update to authenticated
using (bucket_id = 'cms-media' and public.is_cms_user())
with check (bucket_id = 'cms-media' and public.is_cms_user());
create policy cms_media_admin_delete on storage.objects
for delete to authenticated
using (bucket_id = 'cms-media' and public.current_cms_role() = 'admin');

commit;
