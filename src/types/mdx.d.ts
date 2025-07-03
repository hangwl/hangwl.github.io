declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  export const frontmatter: {
    title?: string
    description?: string
    date?: string
    tags?: string[]
    featured?: boolean
    image?: string
    [key: string]: any
  }
}
