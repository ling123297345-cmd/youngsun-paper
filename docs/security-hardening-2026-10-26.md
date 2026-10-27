# Security hardening, 2026-10-26

## Applied to GitHub

- Master branch: force pushes and deletion prohibited; administrators included.
- Existing direct pushes and automated publishing are retained. No PR-review requirement was added.
- Vulnerability alerts and automated security fixes enabled and read back successfully.

## Applied to Supabase

- Inspected deployed definitions and confirmed the old NULL-unsafe authorization guard.
- Applied both hardening SQL files through the authenticated project SQL editor.
- Ran the rollback-only SQL regression test successfully: absent-role users rejected; anonymous function access and direct role-column updates prohibited.
- Deployed the existing trigger-publish function with the additional database authorization check; preserved existing authentication settings and secrets.
- Rechecked the function anonymously: HTTP 401.
- No records/accounts were created or edited during regression tests. No MFA factors were enrolled by the agent.

## Implemented source

- Vite 8.3.5, source-map-js 1.2.2; full npm audit returns zero known vulnerabilities.
- Fail-closed CMS access function, validation of null inputs, and prevention of self-demotion/deactivation.
- Audit logging for CMS user changes.
- Optional TOTP enrollment and mandatory challenge for users with verified factors.
- Database CMS role checks require AAL2 after the user opts in to MFA.
- Publish Edge Function checks the database authorization helper.
- Isolated admin HTML shell: CSP, no-referrer and no public analytics.
- Service worker excludes admin navigation, cross-origin requests and authorized requests.
- Build secrets limited to the CMS synchronization step; checkout credentials are not persisted.
- Weekly dependency updates and build/security checks configured.

## Verified locally

- Production build and validation of 197 crawlable pages pass.
- Four security regression/configuration checks pass (`node --test scripts/security.test.mjs`).
- Built admin login and password-reset screen render without console errors.
- At 390px width the admin login has no horizontal overflow.
- Admin page CSP is present and no Clarity/Google Analytics scripts load.

## Deployment order and remaining checks

1. Sign in to the existing Supabase project; inspect deployed function definitions, RLS and grants before applying changes. Do not assume migration files reflect production.
2. Apply `20261026193000_harden_cms_access.sql` and `20261026194000_enforce_enrolled_cms_mfa.sql` in order. Preserve other policies and existing content.
3. Run `supabase/tests/cms-security.sql`; it creates no records and rolls back session changes. This test passed against production on 2026-10-26.
4. Deploy the updated `trigger-publish` Edge Function with its existing secrets and authentication settings unchanged.
5. Push reviewed source files, run security/build checks and publish. Do not publish enrollment UI while database enforcement is still unapplied.
6. The account owner must personally enroll their authenticator and enter the code. Never transmit QR secrets or codes to the agent. Test fresh-login challenge and sign-out. An independent Supabase project administrator must retain the ability to recover a lost factor after identity verification.
7. Confirm anonymous users still cannot read CMS users/audit logs; check real active-editor/inactive-user restrictions using authorized test accounts before claiming comprehensive authorization coverage.

## Still requires separate infrastructure/account work

- HSTS, frame-ancestors/X-Frame-Options and X-Content-Type-Options need response-header control; GitHub Pages cannot set arbitrary custom headers. The admin meta CSP does not provide clickjacking protection.
- Verify owner MFA on GitHub and Supabase organization accounts; application MFA does not cover those accounts.
- Confirm database/media backup retention and perform a recovery drill. Git source history is not a database backup.
- Confirm live authentication rate limits and monitor access/security logs.

Supabase access blocker resolved: database and Edge Function changes are applied. The project overview currently reports no backups. MFA remains opt-in until the account owner personally binds and verifies their authenticator. The fresh-login AAL2 challenge with a real enrolled user still requires that manual enrollment step.
