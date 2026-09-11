[![Donate](https://img.shields.io/badge/-%E2%99%A5%20Donate-%23ff69b4)](https://hmlendea.go.ro/funding)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Visit-blue)](https://hmlendea.github.io/password-generator/index.html)
[![License](https://img.shields.io/github/license/hmlendea/password-generator)](https://github.com/hmlendea/password-generator/blob/master/LICENSE)

# Password Generator

A static browser application for generating passwords from selectable character classes and copying the result to the system clipboard.

## 📑 Table of Contents

- [Demo](#-demo)
- [Capabilities](#-capabilities)
- [Usage](#-usage)
- [Known Limitations](#-known-limitations)
- [System Requirements](#-system-requirements)
- [Installation](#-installation)
- [Integrations](#-integrations)
- [Privacy and Data](#-privacy-and-data)
- [Development](#-development)
  - [Requirements](#requirements)
  - [Setup](#setup)
- [Project Structure](#-project-structure)
  - [Directories](#directories)
- [Architecture](#-architecture)
- [Deployment](#-deployment)
- [Security](#-security)
- [Contributing](#-contributing)
- [Project Engagement](#-project-engagement)
- [License](#-license)

## 🎬 Demo

Try the hosted application on [GitHub Pages](https://hmlendea.github.io/password-generator/index.html).

## ✨ Capabilities

- Generate passwords with a configurable length.
- Select digits, lowercase letters, uppercase letters, standard symbols, extra symbols, brackets, and other characters.
- Copy the generated password to the system clipboard.
- Use the application directly in a browser without an account or server-side setup.

## 🚀 Usage

1. Open the [hosted application](https://hmlendea.github.io/password-generator/index.html).
2. Enter the desired password length; the default is `48`.
3. Enable or disable the character classes.
4. Select **Generate**.
5. Select **Copy** to place the displayed password on the system clipboard.

## ⚠️ Known Limitations

- Password generation uses JavaScript `Math.random()`, which is not a cryptographic random source.
- The page does not validate the requested length or prevent all character classes from being disabled.
- The copy action uses `navigator.clipboard.writeText()` in secure contexts and falls back to the browser's legacy `document.execCommand("copy")` API; it provides no success or failure message.
- jQuery, Bootstrap, Start Bootstrap, Font Awesome, and the favicon are loaded from external URLs, so external asset availability can affect the page.
- Generated passwords are not stored by the application, but copying places them under the control of the operating system clipboard.

## 🖥️ System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Web browser | JavaScript-enabled browser with HTML5 support | Current browser with clipboard support |
| Network access | Required for the hosted page's external assets | Stable connection to the hosted page and its asset providers |

## 📦 Installation

The simplest option is to use the [GitHub Pages deployment](https://hmlendea.github.io/password-generator/index.html). The application is also distributed as the repository's static files; download or clone the repository and serve its root directory with a static web server.

The entry point is [index.html](index.html).

## 🔌 Integrations

| Integration | Compatibility | Purpose | Required |
|-------------|---------------|---------|----------|
| jQuery 3.7.0 slim | CDN script loaded by `index.html` | DOM value and checkbox access used by the generator | Yes |
| Bootstrap 5.3.0 | CDN stylesheet and bundle | Layout, form, navigation, and responsive presentation | For the intended styling |
| Start Bootstrap Freelancer assets | GitHub Pages-hosted stylesheet and script | Page styling and supporting page behaviour | For the intended styling |
| Font Awesome 6.4.0 | CDN script | Icons in the navigation and controls | No |
| Browser clipboard | `navigator.clipboard.writeText()` in secure contexts, with a legacy fallback | Copy the displayed password | Only for the Copy action |

## 🛡️ Privacy and Data

| Data | Purpose | Storage | Retention | Optional |
|------|---------|---------|-----------|----------|
| Password length and character selections | Configure generation | Browser DOM only | Until the page is reloaded or values are changed | Yes |
| Generated password | Display and copy the result | Browser memory and the password input | Until replaced or the page is reloaded | Yes |
| Clipboard contents | Provide the requested copy action | Operating system clipboard | Controlled by the operating system and user | Yes |

The repository contains no application server, analytics implementation, account system, or password persistence. External asset providers receive normal browser requests for the resources declared in [index.html](index.html).

## 🛠️ Development

### Requirements

- A text editor or IDE.
- A JavaScript-enabled web browser.

### Setup

1. Clone or download the repository.
2. Open [index.html](index.html) in a browser, or serve the repository root with a static web server.
3. Edit [index.html](index.html), [css/custom.css](css/custom.css), or [js/password-generator.js](js/password-generator.js) as required.

This repository has no package manifest, dependency-restoration step, build script, test suite, or configured linting command.

## 🗂️ Project Structure

The project is a static browser application composed of one HTML entry point, one local stylesheet, one client-side script, and repository metadata.

### Directories

| Directory | Purpose |
|-----------|---------|
| `css/` | Local presentation overrides |
| `js/` | Client-side password generation and clipboard logic |
| `.github/` | Repository funding metadata |

## 🏗️ Architecture

See the [architecture documentation](ARCHITECTURE.md) for the system context, principal components, runtime flows, ownership boundaries, dependencies, constraints, and extension points.

## 🚢 Deployment

The public deployment is a static GitHub Pages site at [hmlendea.github.io/password-generator](https://hmlendea.github.io/password-generator/index.html). Deployment serves the repository files directly; there is no application server, database, background process, or migration step.

## 🔒 Security

For information on reporting security vulnerabilities, see [SECURITY.md](SECURITY.md).

## 🤝 Contributing

You are welcome to submit any suggestion, feedback, or modification to this project.

When doing so, please:
- Maintain cross-platform compatibility
- Submit focused pull requests that conform to the existing code style
- Maintain your branch synchronised with `master`
- Revise the documentation when functionality changes
- Raise a new [issue](https://github.com/hmlendea/password-generator/issues) for problems or suggestions

## 💝 Project Engagement

Discovered a problem or have a suggestion? [Open an issue](https://github.com/hmlendea/password-generator/issues)!

If you find this project useful, consider [funding it](https://hmlendea.go.ro/funding) or starring ⭐️ it on GitHub!

[![Donate](https://raw.githubusercontent.com/hmlendea/readme-assets/master/donate_generic.png)](https://hmlendea.go.ro/funding)

## 📄 License

This project is being distributed under the `GNU General Public License v3.0`.
See [LICENSE](LICENSE) for further information.
