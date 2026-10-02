# Password Generator FAQ

## 🔐 What is the Password Generator?

The Password Generator is a static browser application that generates passwords from selectable character classes and provides a copy action to the system clipboard. It is designed to run entirely in the browser without requiring server-side components, account systems, or persistent storage.

## 🔄 How does the Password Generator work?

The Password Generator works by:
1. Allowing the user to select the desired character classes (digits, lowercase letters, uppercase letters, symbols, etc.).
2. Generating a password based on the selected character classes and the specified length.
3. Displaying the generated password in a text input field.
4. Providing a copy action to copy the generated password to the system clipboard.

## 🔒 Is the Password Generator secure?

The Password Generator uses `Math.random()` for generating passwords, which is not a cryptographic random source. Therefore, the generated passwords are not suitable for high-assurance secrets. For secure password generation, consider using the Web Crypto API.

## 📱 Can I use the Password Generator on my mobile device?

Yes, you can use the Password Generator on your mobile device. The application is designed to be responsive and should adapt to different screen sizes. However, for the best experience, it is recommended to use the Password Generator on a desktop or laptop computer.

## 🔄 How do I update the Password Generator?

The Password Generator is a static browser application, so there is no application process, database, background worker, scheduled job, server configuration, or migration mechanism in the repository. To update the Password Generator, you can simply refresh the page in your browser.

## 🛠️ How do I contribute to the Password Generator?

You are welcome to submit any suggestion, feedback, or modification to the Password Generator. When doing so, please:
- Maintain cross-platform compatibility
- Submit focused pull requests that conform to the existing code style
- Maintain your branch synchronized with `master`
- Revise the documentation when functionality changes
- Raise a new [issue](https://github.com/hmlendea/password-generator/issues) for problems or suggestions

## 💝 How can I support the Password Generator project?

If you find the Password Generator useful, consider [funding it](https://hmlendea.go.ro/funding) or starring ⭐️ it on GitHub!

[![Donate](https://raw.githubusercontent.com/hmlendea/readme-assets/master/donate_generic.png)](https://hmlendea.go.ro/funding)

## 📄 Where can I find more information about the Password Generator?

For more information about the Password Generator, please refer to the following documentation:
- [README.md](/home/horatiu/Proiecte/password-generator/README.md) - Project overview, usage instructions, and repository governance
- [ARCHITECTURE.md](/home/horatiu/Proiecte/password-generator/ARCHITECTURE.md) - Architecture documentation
- [SECURITY.md](/home/horatiu/Proiecte/password-generator/SECURITY.md) - Security vulnerability reporting and disclosure policy
- [LICENSE](/home/horatiu/Proiecte/password-generator/LICENSE) - GNU General Public License v3.0
- [.github/FUNDING.yml](/home/horatiu/Proiecte/password-generator/.github/FUNDING.yml) - Funding platform configuration