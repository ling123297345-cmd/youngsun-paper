-- GitHub Actions uses the service role only during trusted static builds.
-- RLS is still enforced for anonymous and authenticated browser clients.
grant select on table public.products, public.blog_posts to service_role;
