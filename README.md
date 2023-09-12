# Nuxt 3 + TresJS starter

![Short gif demonstrating how the starter works](./.github/demo.gif 'Demo GIF')

## What's included

### 1. Demo GLTF model

The `<Suzanne />` component in `/components/Suzanne` loads a custom GLTF model and uses a custom `ShaderMaterial`.

### 2. Box with click handler

The `<SampleBox />` component rotates and floats on every tick and has click/hover handlers.

### 3. GSAP as a Nuxt plugin

GSAP is included as a Nuxt plugin and can be included in any component in the following way:

```js
const { $gsap } = useNuxtApp()
```

The plugin file is located in `/plugins/gsap.js`. Additional GSAP plugin can be imported and registered directly into this file and they will be available in the whole application.

> **Warning**
>
> Some GSAP plugins like the `SplitText` plugin cause errors in the application if registered globally, so you have to check if you're on the client first.

```js
import { SplitText } from 'gsap/SplitText'

// ...

if (process.client) {
	// Some plugins need to be registered only on the client
	gsap.registerPlugin(SplitText)
}
```

### 4. Pinia

[Pinia](https://pinia.vuejs.org/) is already included and configured.

The states are stored in the `/stores` folder and auto included.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm run build
```

Locally preview production build:

```bash
# yarn
yarn preview

# npm
npm run preview

# pnpm
pnpm run preview
```
