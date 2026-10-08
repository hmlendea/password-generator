# Contributing to Password Generator

This document covers the guidelines and processes for contributing to this project, including how to report issues, suggest enhancements, submit code changes, and follow project standards.

## 📑 Table of Contents

- [How to Contribute](#-how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Code Contributions](#code-contributions)
    - [Prerequisites](#prerequisites)
    - [Development Setup](#development-setup)
    - [Making Changes](#making-changes)
    - [Pull Request Guidelines](#pull-request-guidelines)
  - [Code Style](#code-style)
  - [Testing](#testing)
  - [Documentation](#documentation)
- [Code of Conduct](#-code-of-conduct)
- [Security](#-security)
- [License](#-license)
- [Recognition](#-recognition)
- [Getting Help](#-getting-help)

## 🤝 How to Contribute

### Reporting Issues

- Search existing issues first.
- Use the issue templates if available.
- Provide clear reproduction steps.
- Include environment details (browser, OS, deployed URL or local file).

### Suggesting Enhancements

- Check the roadmap and existing discussions.
- Explain the use case and expected behavior.
- Consider implementation complexity for a static browser application.

### Code Contributions

#### Prerequisites

- A text editor or IDE.
- A JavaScript-enabled web browser.

#### Development Setup

```bash
# Clone the repository
git clone https://github.com/hmlendea/password-generator.git
cd password-generator

# No dependencies to install; open index.html in a browser or serve with a static web server
```

#### Making Changes

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes to `index.html`, `css/custom.css`, or `js/password-generator.js`.
4. Test by opening `index.html` in a browser.
5. Commit with clear and descriptive messages.
6. Push to your fork.
7. Open a Pull Request targeting the `master` branch.

#### Pull Request Guidelines

- Target the `master` branch.
- Keep PRs focused and atomic.
- Update documentation if applicable (README.md, ARCHITECTURE.md, PRIVACY.md, SECURITY.md).
- Ensure the application works in a browser without errors.
- Maintain cross-platform compatibility.

### Code Style

Follow the existing code style in the repository:
- Use `var` for variable declarations (consistent with existing code).
- Use 4-space indentation.
- Keep functions focused and simple.
- No build step, linter, or formatter configured.

### Testing

This project has no automated test suite. Test manually by:
1. Opening `index.html` in a browser.
2. Verifying password generation with various character class combinations.
3. Verifying the Copy button selects and copies the password.
4. Checking for JavaScript console errors.

### Documentation

- Update relevant docs for changes (README.md, ARCHITECTURE.md, PRIVACY.md, SECURITY.md).
- Keep documentation in sync with functionality.

## 📋 Code of Conduct

This project follows the [Code of Conduct](docs/Code%20of%20Conduct.md).

## 🔒 Security

Report security vulnerabilities per the [Security Policy](SECURITY.md).

## 📄 License

By contributing, you agree that your contributions will be licensed under the [GNU General Public License v3.0](LICENSE).

## ❓ Getting Help

- Open an [issue](https://github.com/hmlendea/password-generator/issues) for problems or suggestions.
- Check existing discussions and documentation first.