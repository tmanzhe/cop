import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-start-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
      },
    },
  },
  plugins: [],
}

export default config 