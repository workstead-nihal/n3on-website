# GitHub Pages and Wix DNS

Source: https://github.com/workstead-nihal/n3on-website

Hosting target: GitHub Pages. The previous ChatGPT hosting DNS records must not be used.

## 1. Configure GitHub first

Open https://github.com/workstead-nihal/n3on-website/settings/pages.
Pages is configured to use GitHub Actions. The workflow in .github/workflows/pages.yml checks lint and TypeScript, builds the Vite app, and publishes dist on each push to main.
Set Custom domain to n3ontech.in and save before changing Wix DNS.
The custom domain is configured as n3ontech.in in GitHub Pages.

## 2. Set Wix DNS

Open https://manage.wix.com/account/domains.
Select n3ontech.in > Domain Actions > Manage DNS Records.
Replace the existing root A records with these four records. Leave the root Host Name blank in Wix.
Replace the www CNAME with the record below. Leave TTL at its default.

| Type | Host Name in Wix | Value |
| --- | --- | --- |
| A | (blank) | 185.199.108.153 |
| A | (blank) | 185.199.109.153 |
| A | (blank) | 185.199.110.153 |
| A | (blank) | 185.199.111.153 |
| CNAME | www | workstead-nihal.github.io |

The www value has no https:// prefix and no repository path.
Public DNS checked on 2026-10-08 via Cloudflare resolves all four GitHub A records and the correct www CNAME. Local DNS caches may still show the previous Wix records.
If you applied the previous ChatGPT DNS instructions, replace those root A and www CNAME records instead. Its _openai-site-verification and _cf-custom-hostname TXT records are not needed for GitHub Pages.
Preserve MX, email-related TXT, and unrelated subdomain records.

## 3. Finish HTTPS

Save the Wix changes. DNS propagation may take up to 48 hours according to Wix.
Return to GitHub Settings > Pages. Once the DNS check passes and the certificate is ready, enable Enforce HTTPS.

## References

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://support.wix.com/en/article/connecting-a-wix-domain-to-an-external-site

