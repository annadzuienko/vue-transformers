# vue-transformers

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```
npm install
```

### Compile and Hot-Reload for Development

```
npm run dev
```

### Type-Check, Compile and Minify for Production

```
npm run build
```

### Local Deployment (Docker)
```
Clone repository and switch to master branch:
git clone https://github.com/annadzuienko/vue-transformers.git
cd vue-transformers
git checkout master

Build Docker image
docker build -t vue-transformers .

Run the container
docker run -p 8080:80 vue-transformers

Access the app Visit:
http://localhost:8080
```

### Lint with [ESLint](https://eslint.org/)

```
npm run lint
```
