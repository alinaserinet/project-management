# Project Management Application

This project is a basic web-based project management.

## Technologies Used

- **React**: A JavaScript library for building dynamic and interactive user
  interfaces.
- **Vite**: A next-generation frontend build tool that offers instant server
  start and lightning-fast HMR (Hot Module Replacement) during development.
- **pnpm**: A fast, disk space-efficient package manager that uses symlinks to
  save storage space and speed up installations.
- **React Router**: Enables dynamic routing in the application, allowing for
  seamless navigation between different views and components.
- **Redux**:
  - **Redux Toolkit**: Simplifies Redux development by providing ready-to-use
    functions and reducing boilerplate code.
  - **Redux Thunk**: Middleware that allows writing action creators that return
    a function instead of an action, useful for handling asynchronous logic.
- **Emotion**: A CSS-in-JS library that allows writing CSS styles with
  JavaScript, enabling scoped and dynamic styling.
- **React Hook Form**: A performant library for managing form state and
  validation in React applications.
  - **Zod Resolver**: Integrates Zod schema validation with React Hook Form for
    declarative and type-safe form validations.

---

## Environment Setup

Before running the application, you need to set up your environment variables:

1. **Copy the sample environment file:**

   ```bash
   cp sample.env .env
   ```

2. **Set the environment variables:**

   Open the .env file and set the necessary variables.

---

## Scripts

The project comes with several scripts to streamline development and build
processes:

- `dev`: Starts the development server using Vite.

  ```bash
   pnpm run dev
  ```

- `build`: Builds the project for production. It compiles TypeScript files (tsc
  -b) and then builds with Vite.

  ```bash
   pnpm run build
  ```

- `lint:ci`: Runs ESLint to check for code quality issues without fixing them
  (useful for CI environments).

  ```bash
   pnpm run lint:ci
  ```

- `lint`: Runs ESLint and automatically fixes fixable issues.

  ```bash
   pnpm run lint
  ```

- `preview`: Serves the production build locally for previewing.

  ```bash
   pnpm run preview
  ```

- `prepare`: Sets up Husky for Git hooks. This runs automatically after
  dependencies are installed.

  ```bash
   pnpm run prepare
  ```

- `sb`: Starts the Storybook server for component development on port 6006.

  ```bash
   pnpm run sb
  ```

- `build-sb`: Builds the Storybook.

  ```bash
   pnpm run build-sb
  ```

- `api`: Starts a mock API server using `json-server`, watching the
  `./mock/db.json` file on port `3001`.

  ```bash
   pnpm run api
  ```

---

## Mock API Setup

To set up and run the mock API server, follow these steps:

1. **Copy the sample database file:**

   ```bash
   cp ./mock/sample-db.json ./mock/db.json
   ```

2. **Start the mock API server:**

   ```bash
   pnpm run api
   ```

This will start a mock API server using `json-server`, watching the
`./mock/db.json` file on port `3001`. The mock API is useful for testing and
development purposes.

---

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/)
specification for our commit messages. This convention provides a standardized
way to structure commit messages, making it easier to understand the history of
the project, automate versioning, and generate changelogs.
