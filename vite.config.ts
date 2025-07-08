/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import viteReact from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { fileURLToPath, URL } from 'node:url'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [
        [rehypePrettyCode, {
          theme: {
            dark: 'github-dark-default',
            // light: 'everforest-light',
            light: 'dark-plus',
          },
          transformers: [
            transformerCopyButton(),
          ],
        }],
      ],
    }),
    viteReact(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
