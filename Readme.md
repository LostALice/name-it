# Name-It 

A website that helps you name variables, functions, and more!

Try it: [https://lostalice.github.io/name-it/](https://lostalice.github.io/name-it/)

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   Node.js (version 18 or higher recommended)
*   npm or yarn package manager

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/LostALice/name-it.git
    cd name-it
    ```

2.  Install the dependencies:

    ```bash
    npm install # or yarn install
    ```

## ✨ Key Features

This project is built using Next.js and includes the following features:

*   **Variable/Function Naming Assistance:** Provides suggestions for naming variables, functions, classes, and other code elements.
*   **Contextual Suggestions:**  (If applicable, describe how the tool takes context into account.  For example: "Takes into account the purpose of the variable/function to provide more relevant suggestions.")
*   **Customizable Preferences:** (If applicable, describe any customization options. For example: "Allows users to specify naming conventions, such as camelCase or snake_case.")
*   TypeScript for type safety.
*   Tailwind CSS for styling.
*   ESLint for code linting.
*   **GitHub Pages Deployment:**  This project is deployed to GitHub Pages using a GitHub Action for automated builds and deployments.

## 💻 Development

To start the development server, run:

```bash
npm run dev # or yarn dev
```

This will start the Next.js development server with hot-reloading. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 💡 How to Use

1.  Navigate to the website in your browser: [https://lostalice.github.io/name-it/](https://lostalice.github.io/name-it/)
2.  Enter a description of the variable, function, or other code element you need to name.
3.  The website will generate a list of suggested names.
4.  Choose the name that best fits your needs.

## ⚙️ GitHub Actions & Pages Demo

This repository demonstrates the use of GitHub Actions to automatically build and deploy the Next.js application to GitHub Pages.

*   **GitHub Action:** The `.github/workflows/` directory contains a workflow configuration file (e.g., `deploy.yml`) that defines the steps to build and deploy the application whenever changes are pushed to the `main` branch.  This workflow typically includes:
    *   Checking out the code.
    *   Setting up Node.js.
    *   Installing dependencies.
    *   Building the Next.js application.
    *   Deploying the built application to the `gh-pages` branch.

*   **GitHub Pages:** The website is hosted on GitHub Pages, which serves the static files from the `gh-pages` branch.  You can configure GitHub Pages in the repository settings under the "Pages" section.  Select the `gh-pages` branch as the source.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main branch of this repository.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

If you find a bug, please report it by creating a new issue in this repository.
