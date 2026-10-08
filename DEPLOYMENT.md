# Deployment

Source: https://github.com/workstead-nihal/n3on-website

Live site: https://n3ontech.fuzzypin16.chatgpt.site

Hosting: ChatGPT Sites. GitHub contains the source; GitHub pushes do not automatically deploy to Sites.

## Connect Wix DNS

Open https://manage.wix.com/account/domains and select n3ontech.in, then Domain Actions > Manage DNS Records.

Replace the root A records with the two A records below. Replace the existing www CNAME with the target below. Add all four TXT records. Wix uses a blank host for the root domain. Preserve mail records and other unrelated DNS records.

| Type | Host | Value |
| --- | --- | --- |
| A | (blank) | 162.159.143.30 |
| A | (blank) | 172.66.3.26 |
| CNAME | www | custom-domains.chatgpt.site |
| TXT | _openai-site-verification | openai-site-verification=X2eEWSZCENT5KtZrQezphuOGt8lAbSrpQpur4aNHXHI |
| TXT | _cf-custom-hostname | 040059d1-e3a1-4319-858d-a268a2568791 |
| TXT | _openai-site-verification.www | openai-site-verification=ha1HYIAThe3VGerdkV5QTqlw-fQc9pdhaoYkXW2l7T4 |
| TXT | _cf-custom-hostname.www | 68bff37e-5ddd-4525-8953-fa5b36e956a8 |

Reference: https://support.wix.com/en/article/connecting-a-wix-domain-to-an-external-site

Domain registration is pending DNS verification and SSL activation. DNS propagation can take up to 48 hours.

## Validation

TypeScript checks and Vite production build passed. Deployment succeeded from source commit 78fda0bcc1879beafeecbb7a2e55a81818fe58ec.

## Known limits

The contact form has no backend and does not deliver submissions. npm reported 33 dependency vulnerabilities; dependency remediation was outside this deployment change.

