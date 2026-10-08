# Privacy and Personal Data

This document describes how the Password Generator static browser application handles personal data. The application runs entirely in the browser with no server-side component, no accounts, and no data collection.

**Information reviewed:** 2026-10-08

## 📑 Table of Contents

- What This Document Covers
- Data We Handle
- Processing and Use
- Storage, Retention, and Deletion
- External Processing and Integrations
- User Controls and Requests
- Data Protection and Security
- Document Changes
- Contact

## 🔎 What This Document Covers

This document describes how the Password Generator application at https://hmlendea.github.io/password-generator/ handles personal data. It covers the application behaviour and verified integrations described below. The application is a static browser application deployed on GitHub Pages with no server-side processing.

## 📥 Data We Handle

### Data Provided to the Application

No personal data is requested, collected, or stored by the application. The user provides only:
- Password length preference (a number, default 32)
- Character class selections (checkboxes for digits, letters, symbols, etc.)

These preferences are not personal data and are not persisted beyond the browser session.

### Data Generated or Collected by the Application

The application generates passwords client-side using `Math.random()`. No personal data is generated, collected, logged, or transmitted. No telemetry, analytics, crash reports, or update checks are performed by the application code.

### Data Received from Integrations

No personal data is received from integrations or third parties. The application loads the following third-party assets from CDNs:
- jQuery (code.jquery.com)
- jQuery Easing (cdnjs.cloudflare.com)
- Bootstrap CSS/JS (cdn.jsdelivr.net)
- Font Awesome (use.fontawesome.com)
- Start Bootstrap CSS/JS (startbootstrap.github.io)

These CDNs may receive standard HTTP request data (IP address, user agent, referrer) as part of normal asset delivery. The application does not send any user-generated data to these services.

## 🧭 Processing and Use

The application processes data for these verified functions:
- Password generation — user-selected character classes and length (ephemeral, in-memory only)
- Clipboard copy — generated password value (ephemeral, user-initiated)

No other processing occurs.

## 🗄️ Storage, Retention, and Deletion

No personal data is stored by the application.
- Generated passwords exist only in the browser DOM and JavaScript memory during the session.
- No localStorage, sessionStorage, IndexedDB, cookies, or server-side storage is used.
- Closing the browser tab removes all application data from memory.

## 🔗 External Processing and Integrations

The application has no built-in external data transfer. The only network requests are for loading static assets from the CDNs listed above. No generated passwords, user preferences, or other data are sent to any external service.

| Service or integration | Purpose | Data involved | Configuration or documentation |
|-----------------------|---------|---------------|--------------------------------|
| jQuery CDN | JavaScript library | None (static asset) | https://code.jquery.com/ |
| jQuery Easing CDN | Animation easing | None (static asset) | https://cdnjs.com/libraries/jquery-easing |
| Bootstrap CDN | CSS/JS framework | None (static asset) | https://getbootstrap.com/docs/5.3/getting-started/download/ |
| Font Awesome CDN | Icon font | None (static asset) | https://fontawesome.com/docs/web/setup/host-yourself-webfonts |
| Start Bootstrap CDN | Theme assets | None (static asset) | https://startbootstrap.com/ |

## ⚙️ User Controls and Requests

Since no personal data is collected or stored, there are no data access, rectification, erasure, or portability procedures. Users control the application entirely by closing the browser tab.

## 🛡️ Data Protection and Security

- All password generation occurs client-side; no passwords are transmitted over the network.
- The application uses HTTPS when deployed on GitHub Pages.
- Clipboard access uses the modern Clipboard API (secure contexts only) with a fallback to `document.execCommand("copy")`.
- No authentication, authorization, or session management exists.
- Instance operators (GitHub Pages) control the deployment infrastructure; the project maintainers control only the repository source code.

## 🔄 Document Changes

Update this document when application data flows, storage, integrations, or deployment responsibilities change. The current version is published at https://github.com/hmlendea/password-generator/blob/master/PRIVACY.md.

## 📬 Contact

For questions about application data handling, contact the project maintainers through the GitHub repository: https://github.com/hmlendea/password-generator