# Contributing to AI Atlas

Thank you for your interest in contributing to AI Atlas! This document provides guidelines and instructions for contributing to this project.

## Ways to Contribute

There are several ways you can contribute to AI Atlas:

1. **Add new European AI services**: Help us expand our directory by adding new services.
2. **Update existing services**: Keep information accurate and up-to-date.
3. **Improve the UI/UX**: Enhance the user interface and experience.
4. **Fix bugs**: Help us identify and fix issues.
5. **Add new features**: Suggest and implement new features.
6. **Improve documentation**: Help us make our documentation more comprehensive and clear.

## Adding a New AI Service

The most common contribution is adding a new European AI service to our directory. Here's how to do it:

### Step 1: Fork the Repository

1. Click the "Fork" button at the top right of the [repository page](https://github.com/yourusername/aiatlas).
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/aiatlas.git
   cd aiatlas
   ```

### Step 2: Add the Service

1. Open the `src/data/services.ts` file.
2. Find the appropriate category for your service.
3. Add a new service entry following this format:
   ```typescript
   {
     name: "Service Name",
     description: "Brief description of the service (max 150 characters)",
     icon: "🤖", // Choose an appropriate emoji
     country: "🇪🇺", // Country flag emoji where the company is headquartered
     link: "https://example.com/",
   }
   ```

### Step 3: Test Your Changes

1. Install dependencies if you haven't already:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.
4. Verify that your service appears correctly in the appropriate category.

### Step 4: Submit a Pull Request

1. Commit your changes:
   ```bash
   git add src/data/services.ts
   git commit -m "Add [Service Name] to [Category]"
   ```
2. Push to your forked repository:
   ```bash
   git push origin main
   ```
3. Go to the [original repository](https://github.com/yourusername/aiatlas) and click "New Pull Request".
4. Select your fork and review your changes.
5. Click "Create Pull Request" and provide a clear description of your addition.

## Guidelines for Adding Services

When adding a new service, please ensure it meets the following criteria:

- **European Focus**: The service should be developed by a company headquartered in Europe.
- **Active Service**: The service should be currently active and accessible.
- **Generative AI Component**: The service should have an innovative generative AI solution as a significant part of its offering.
- **Accurate Description**: Provide a clear, concise description of what the service does (max 150 characters).
- **Appropriate Category**: Place the service in the most relevant category.
- **Valid Link**: Ensure the link to the service works and points to the official website.
- **Appropriate Icon**: Choose an emoji that represents the service well.
- **Correct Country Flag**: Use the correct country flag emoji for the company's headquarters.

## Adding a New Category

If you believe a new category is needed:

1. Open an issue first to discuss the proposed category.
2. Once approved, update the `src/data/services.ts` file to add the new category following the existing pattern.

## Code Style

We use Prettier and ESLint for code quality and formatting. Before submitting a PR:

1. Install dependencies: `npm install`
2. Format your code: `npm run format` (this will run Prettier)
3. Check for linting issues: `npm run lint` (this will run ESLint)

The project uses standard Prettier configuration with:
- Single quotes for JavaScript strings
- Double quotes for JSX attributes (HTML convention)
- Semicolons
- 2 spaces indentation
- ES5 trailing commas
- Spaces in object literals
- Parentheses around arrow function parameters

You can check our formatting rules in `.prettierrc` and ESLint configuration in `.eslintrc.json`.

### VS Code Setup

1. Install the Prettier extension
2. Enable "Format On Save" in VS Code settings
3. Set Prettier as the default formatter

You can also set up your editor to format on save using the project's Prettier configuration.

## Pull Request Process

1. Ensure your code follows our guidelines.
2. Update documentation if necessary.
3. Your pull request will be reviewed by maintainers.
4. Address any requested changes.
5. Once approved, your changes will be merged.

## Questions?

If you have any questions or need help, please open an issue or reach out to the maintainers.

Thank you for contributing to AI Atlas! 🇪🇺
