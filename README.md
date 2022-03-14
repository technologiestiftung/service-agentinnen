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