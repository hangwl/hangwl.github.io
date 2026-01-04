declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  export const frontmatter: {
    title?: string
    description?: string
    date?: string
    tags?: string[]

    image?: string
    [key: string]: any
  }
}

declare module '*.md' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  export const frontmatter: {
    title?: string
    description?: string
    date?: string
    tags?: string[]

    image?: string
    [key: string]: any
  }
}
