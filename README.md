# ServiceAgent:innen

## Developing

This site is built with [Eleventy (11ty)](https://www.11ty.dev/docs/).

### Getting started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

A development server will be available at [http://localhost:8080](http://localhost:8080).

### Modules

The modules presented in _ServiceAgent:innen_ can be found and modified in `src/modules/0{1-8}.md`. The overview page is `src/modules/index.liquid`.

### Home page

The homepage is `src/index.liquid`.

### Assets

Can be found in `src/assets/`. If you want to use a folder inside that doesn't exist yet, you need to add it to the Eleventy [asset pipeline](https://www.11ty.dev/docs/copy/).

### Data

General data can be defined in `src_/data/`.

### Includes (Layouts and Partials)

`src/_includes` holds all [layouts](https://www.11ty.dev/docs/layouts/) and [partials](https://www.11ty.dev/docs/config/#directory-for-includes).

## Testing

For testing we use [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html) and [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/).

Tests should cover the basic interactions of the website and ensure that all important content is present. Cypress tests should be added to `cypress/integration/` (currently there is only a test stub there).

### Running tests locally

Make a test run:

```bash
npm run test
```

Launching the test runner in watch mode:

```bash
npm run test:watch
```

### Running tests in CI

In `.github/workflows/test.yml` we have configured Cypress to run all pushes and pull requests to `main`. The passing of this test run is required for merging changes.
