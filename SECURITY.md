# Security Policy

This policy explains how to report security vulnerabilities in the Password Generator static browser application, which distributions receive security maintenance, and how coordinated disclosure is handled.

## 📑 Table of Contents

- [Supported Versions](#-supported-versions)
- [Reporting a Vulnerability](#-reporting-a-vulnerability)
- [Scope](#-scope)
- [Disclosure Policy](#-disclosure-policy)

## 🛡️ Supported Versions

Use this table to indicate which project versions currently receive security maintenance.

| Version | Distribution Channel | Supported |
|---------|--------------------|-----------|
| Latest version | GitHub Pages deployment | ✅ |
| Latest version | GitHub repository source | ✅ |
| Latest version | Unofficial third-party distribution channels | ❌ |
| Preceding versions | Any distribution channel | ❌ |

## 🚨 Reporting a Vulnerability

Please do not disclose suspected vulnerabilities publicly before maintainers have had an opportunity to validate and remediate them.

To report a vulnerability:
- [GitHub Security Advisories](https://github.com/hmlendea/password-generator/security/advisories)
- Contact the maintainers directly through the repository's GitHub account

When possible, include the affected file or deployed URL, reproduction steps, impact, and any proposed mitigation. Do not include passwords, access tokens, private personal data, or other secrets in a report.

## 📌 Scope

The subsequent report categories are in scope for this repository:
- Vulnerabilities in repository-controlled HTML, CSS, or JavaScript that permit code injection, unintended data disclosure, or unsafe browser behaviour.
- Unsafe handling of generated passwords, clipboard contents, user input, or third-party asset loading within the deployed page.

The subsequent categories are out of scope unless explicitly stated to the contrary:
- Vulnerabilities in GitHub, GitHub Pages, jQuery, Bootstrap, Font Awesome, Start Bootstrap, external CDNs, or other third-party infrastructure; report those to the responsible provider.
- Social engineering, denial-of-service activity against hosted services, physical attacks, and issues requiring modified local browsers or operating systems.

## 📢 Disclosure Policy

This project follows coordinated disclosure:
1. Vulnerabilities are investigated privately.
2. A remediation plan is prepared and validated.
3. Public disclosure is published after a fix, mitigation, or agreed risk decision is available.
4. Credit is attributed in accordance with reporter preference and project policy.

Do not publish proof-of-concept details, exploit code, or issue reports publicly before maintainers have completed validation and remediation coordination.
