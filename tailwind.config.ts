import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx, css}',
  ],
  theme: {
    extend: {
      colors: {
        "my-bg": '#1d1d1d',
        "my-lime": '#39dc20',
        "my-viol": '#ff1cff',
      }
    },
  },
  plugins: [],
}
export default config
