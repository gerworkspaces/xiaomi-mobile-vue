# Author
- Vo Nguyen Thanh Quang 

npm install dependencies:
```bash or zsh
npm install -D tailwindcss postcss autoprefixer
npm install @pinia/nuxt pinia
npm install axios
npm install @heroicons/vue @headlessui/vue
npm install -D eslint eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier
npm install -D vitest @vue/test-utils
npm install -D cypress
```
![alt text](slide_img.png)
![alt text](top_best_selling_product.png)
![alt text](top_product.png)
![alt text](footer.png)
![alt text](responsive_mb.png)
![alt text](mb2.png)
![alt text](mb3.png)
![alt text](mb4.png)
![alt text](mb5.png)

- Note: Nuxt 3 has first-class support for `pinia` via `@pinia/nuxt`. For HTTP you can use `axios` or the built-in `useFetch/$fetch`. I include `axios` because many teams use it.

## Routing - Automatic Routing by the created from `/pages` folder
Faster development and cleaner structure
`/pages`
`index.vue`
`login.vue`
`dashboard.vue`

## API layer
`/server/api`
`login.ts`
`users/ts`

## Component Architecture
`/components/...`:
`headers.vue`
`footers.vue`

## State Management with Pinia Integrated Automatically
- Pinia - Cleaner and easier state logic
`@pinia/nuxt` (auto-import store setup)
`/stores`
`user.ts`

## Route protection
`/middleware`
`auth.ts`

## Assets
`/assets`
`styles/css`
`images`

## Plugins
`/plugins`
`pinia.ts`

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
