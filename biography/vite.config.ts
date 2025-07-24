import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages用: リポジトリ名に合わせてbaseを指定
const repoName = 'biography'; // 例: biography

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), tailwindcss()],
})
