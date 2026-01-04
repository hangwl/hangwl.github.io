/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import viteReact from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { fileURLToPath, URL } from 'node:url'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { remarkTocExport } from './src/lib/remark-toc-export'
import { remarkFixLinks } from './src/lib/remark-fix-links'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm, remarkTocExport, remarkFixLinks],
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, {
          theme: {
            dark: 'github-dark-default',
            // light: 'everforest-light',
            light: 'dark-plus',
          },
          transformers: [],
        }],
      ],
      include: ['**/*.mdx', '**/*.md'],
    }),
    viteReact(),
  ],
  optimizeDeps: {
    include: [
      'seedrandom',
      'three',
      'react-force-graph-2d',
    ],
  },
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
