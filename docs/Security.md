# Password Generator Security Policy

## 🛡️ Security Overview

The Password Generator is a static browser application that generates passwords from selectable character classes and provides a copy action to the system clipboard. This document outlines the security considerations and policies for the Password Generator.

## 📌 Scope

The subsequent report categories are in scope for this repository:
- Vulnerabilities in repository-controlled HTML, CSS, or JavaScript that permit code injection, unintended data disclosure, or unsafe browser behaviour.
- Unsafe handling of generated passwords, clipboard contents, user input, or third-party asset loading within the deployed page.

The subsequent categories are out of scope unless explicitly stated to the contrary:
- Vulnerabilities in GitHub, GitHub Pages, jQuery, Bootstrap, Font Awesome, Start Bootstrap, external CDNs, or other third-party infrastructure; report those to the responsible provider.
- Social engineering, denial-of-service activity against hosted services, physical attacks, and issues requiring modified local browsers or operating systems.

## 🚨 Reporting a Vulnerability

Please do not disclose suspected vulnerabilities publicly before maintainers have had an opportunity to validate and remediate them.

To report a vulnerability:
- [GitHub Security Advisories](https://github.com/hmlendea/password-generator/security/advisories)
- Contact the maintainers directly through the repository's GitHub account

When possible, include the affected file or deployed URL, reproduction steps, impact, and any proposed mitigation. Do not include passwords, access tokens, private personal data, or other secrets in a report.

## 📢 Disclosure Policy

This project follows coordinated disclosure:
1. Vulnerabilities are investigated privately.
2. A remediation plan is prepared and validated.
3. Public disclosure is published after a fix, mitigation, or agreed risk decision is available.
4. Credit is attributed in accordance with reporter preference and project policy.

Do not publish proof-of-concept details, exploit code, or issue reports publicly before maintainers have completed validation and remediation coordination.

## 🔒 Security Considerations

When using the Password Generator, consider the following security best practices:
- **Input Validation**: Validate user input to prevent malicious input.
- **Output Encoding**: Encode output to prevent cross-site scripting (XSS) attacks.
- **Secure Randomness**: Use cryptographically secure random number generators for generating passwords.
- **Content Security Policy (CSP)**: Implement a CSP to mitigate the risk of XSS attacks.
- **Subresource Integrity (SRI)**: Use SRI to ensure the integrity of external resources.

## 📦 External Dependencies

The Password Generator relies on the following external dependencies:

- **jQuery**: A fast, small, and feature-rich JavaScript library.
- **Bootstrap**: A popular CSS framework for developing responsive and mobile-first websites.
- **Font Awesome**: A comprehensive icon toolkit.
- **Start Bootstrap**: A collection of free and open-source Bootstrap themes and templates.

These dependencies are loaded from CDN (Content Delivery Network) URLs in the `index.html` file. Ensure that you have an internet connection to load these dependencies.

## 📄 Related Documentation

- [README.md](/home/horatiu/Proiecte/password-generator/README.md) - Project overview, usage instructions, and repository governance
- [ARCHITECTURE.md](/home/horatiu/Proiecte/password-generator/ARCHITECTURE.md) - Architecture documentation
- [LICENSE](/home/horatiu/Proiecte/password-generator/LICENSE) - GNU General Public License v3.0
- [.github/FUNDING.yml](/home/horatiu/Proiecte/password-generator/.github/FUNDING.yml) - Funding platform configuration