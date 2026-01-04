import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import GithubSlugger from 'github-slugger'
import type { Root } from 'mdast'

export interface TOCItem {
  id: string
  title: string
  level: number
}

export function remarkTocExport() {
  return (tree: Root, file: any) => {
    const toc: TOCItem[] = []
    const slugger = new GithubSlugger()

    visit(tree, 'heading', (node: any) => {
      const title = toString(node)
      const id = slugger.slug(title)
      
      toc.push({
        id,
        title,
        level: node.depth,
      })
    })

    // Export toc as a named export
    file.data.toc = toc
    
    // Add export statement to the MDX
    tree.children.unshift({
      type: 'mdxjsEsm',
      value: `export const toc = ${JSON.stringify(toc)}`,
      data: {
        estree: {
          type: 'Program',
          body: [{
            type: 'ExportNamedDeclaration',
            declaration: {
              type: 'VariableDeclaration',
              kind: 'const',
              declarations: [{
                type: 'VariableDeclarator',
                id: { type: 'Identifier', name: 'toc' },
                init: {
                  type: 'ArrayExpression',
                  elements: toc.map(item => ({
                    type: 'ObjectExpression',
                    properties: [
                      {
                        type: 'Property',
                        key: { type: 'Identifier', name: 'id' },
                        value: { type: 'Literal', value: item.id },
                        kind: 'init',
                        method: false,
                        shorthand: false,
                        computed: false,
                      },
                      {
                        type: 'Property',
                        key: { type: 'Identifier', name: 'title' },
                        value: { type: 'Literal', value: item.title },
                        kind: 'init',
                        method: false,
                        shorthand: false,
                        computed: false,
                      },
                      {
                        type: 'Property',
                        key: { type: 'Identifier', name: 'level' },
                        value: { type: 'Literal', value: item.level },
                        kind: 'init',
                        method: false,
                        shorthand: false,
                        computed: false,
                      },
                    ],
                  })),
                },
              }],
            },
            specifiers: [],
            source: null,
          }],
          sourceType: 'module',
        },
      },
    } as any)
  }
}
