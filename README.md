# React(vite) App
## Initializing tailwind css first
### Terminal
 - `npm create vite@latest my-project -- --template react`
 - `cd my-project`
 - `npm install -D tailwindcss postcss autoprefixer`
 - `npx tailwindcss init -p`

 ### tailwind.config.js
` /** @type {import('tailwindcss').Config} */`
`export default {`
` content: [`
`   "./index.html",`
 `   "./src/**/*.{js,ts,jsx,tsx}",`
 ` ],`
 ` theme: {`
`    extend: {},`
`  },`
`  plugins: [],`
`}`

### index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

