import { useRef, useState, useEffect, memo, useMemo, useCallback } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'
import { ArrowLeft, FolderOpen, FileText, RotateCcw } from 'lucide-react'
import type { GraphData, NodeObject } from 'react-force-graph-2d'

export interface FolderItem {
  id: string
  title: string
  type: 'note' | 'folder'
  noteCount?: number
}

export interface FolderGraphData {
  folders: {
    name: string
    noteCount: number
    items: FolderItem[]
    notes: { id: string; title: string; links: string[] }[]
  }[]
}

interface GraphNode extends NodeObject {
  id: string
  title: string
  type: 'folder' | 'note'
  noteCount?: number
  color?: string
}

interface NoteGraphProps {
  data: FolderGraphData
}

// Generate a random HSL color with good saturation and lightness
function getRandomColor(seed: string): string {
  // Use seed to generate consistent color per folder name
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue = Math.abs(hash) % 360
  return `hsl(${hue}, 70%, 55%)`
}


const NoteGraph = memo(({ data }: NoteGraphProps) => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null)
  const [currentFolder, setCurrentFolder] = useState<string | null>(null)
  const [ForceGraph2D, setForceGraph2D] = useState<any>(null)
  const graphRef = useRef<any>(null)

  // Dynamically import ForceGraph2D on client side only
  useEffect(() => {
    import('react-force-graph-2d').then((mod) => {
      setForceGraph2D(() => mod.default)
    })
  }, [])

  // Resize observer
  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(entries => {
        const entry = entries[0]
        if (!entry) return
        const { width, height } = entry.contentRect
        setDimensions({ width, height })
      })
      observer.observe(containerRef.current)
      return () => observer.disconnect()
    }
  }, [])

  // Theme-aware colors
  const colors = useMemo(() => isDarkMode
    ? {
        note: '#e2e8f0',        // slate-200
        noteHover: '#60a5fa',   // blue-400
        text: '#cbd5e1',        // slate-300
        link: 'rgba(226, 232, 240, 0.25)',
      }
    : {
        note: '#334155',        // slate-700
        noteHover: '#3b82f6',   // blue-500
        text: '#475569',        // slate-600
        link: 'rgba(45, 55, 72, 0.2)',
      }, [isDarkMode])


  // Build graph data based on current view
  const graphData: GraphData = useMemo(() => {
    if (currentFolder === null) {
      // Show folders as nodes with random colors based on name
      const nodes: GraphNode[] = data.folders.map((folder) => ({
        id: folder.name,
        title: folder.name.toUpperCase(),
        type: 'folder' as const,
        noteCount: folder.noteCount,
        color: getRandomColor(folder.name),
      }))

      // No links between folders (or could add based on cross-folder wiki links)
      return { nodes, links: [] }
    } else {
      // Show items within the selected folder path (can be subfolders or notes)
      // currentFolder can be "ai" or "ai/rag" etc.
      const currentParts = currentFolder.split('/')
      const topFolder = data.folders.find(f => f.name === currentParts[0])
      if (!topFolder) return { nodes: [], links: [] }

      // Get all notes that belong under this path
      const allNotes = topFolder.notes
      const prefix = currentFolder + '/'
      
      // Find direct children (notes and subfolders at this level)
      const subfolders = new Set<string>()
      const directNotes: GraphNode[] = []
      
      allNotes.forEach(note => {
        // Check if note is under current folder
        if (!note.id.startsWith(prefix) && note.id.split('/').slice(0, currentParts.length).join('/') !== currentFolder) {
          return
        }
        
        const noteParts = note.id.split('/')
        const depth = currentParts.length
        
        if (noteParts.length === depth + 1) {
          // Direct note at this level
          directNotes.push({
            id: note.id,
            title: note.title,
            type: 'note',
            color: getRandomColor(note.id),
          })
        } else if (noteParts.length > depth + 1) {
          // Note is in a subfolder - track the immediate subfolder
          const subfolder = noteParts.slice(0, depth + 1).join('/')
          subfolders.add(subfolder)
        }
      })
      
      // Build subfolder nodes
      const subfolderNodes: GraphNode[] = Array.from(subfolders).map(sf => {
        const sfName = sf.split('/').pop() || sf
        const noteCount = allNotes.filter(n => n.id.startsWith(sf + '/') || n.id.startsWith(sf)).length
        return {
          id: sf,
          title: sfName.replace(/-/g, ' ').toUpperCase(),
          type: 'folder' as const,
          noteCount,
          color: getRandomColor(sf),
        }
      })

      const nodes = [...subfolderNodes.sort((a, b) => a.title.localeCompare(b.title)),
                     ...directNotes.sort((a, b) => a.title.localeCompare(b.title))]
      
      // Build note-to-note links within this folder view
      const directNoteIds = new Set(directNotes.map(n => n.id))
      const links: { source: string; target: string }[] = []
      
      allNotes.forEach(note => {
        if (!directNoteIds.has(note.id)) return
        note.links?.forEach(targetId => {
          // Only add link if target is also a direct note in this view
          if (directNoteIds.has(targetId)) {
            links.push({ source: note.id, target: targetId })
          }
        })
      })
      
      return { nodes, links }
    }
  }, [data, currentFolder])

  const handleNodeClick = useCallback((node: NodeObject) => {
    const graphNode = node as GraphNode
    if (graphNode.type === 'folder') {
      setCurrentFolder(graphNode.id)
    } else {
      navigate({ to: `/notes/${graphNode.id}` })
    }
  }, [navigate])

  const handleBack = useCallback(() => {
    setCurrentFolder(null)
  }, [])

  const handleResetView = useCallback(() => {
    if (graphRef.current) {
      graphRef.current.zoomToFit(400, 50)
    }
  }, [])

  // Configure d3 forces and fit view after graph mounts
  useEffect(() => {
    if (graphRef.current) {
      // Increase charge repulsion to spread nodes apart
      graphRef.current.d3Force('charge')?.strength(-50)
      // Increase link distance
      graphRef.current.d3Force('link')?.distance(200)
      // Fit view after simulation settles
      setTimeout(() => {
        graphRef.current?.zoomToFit(400, 50)
      }, 500)
    }
  }, [graphData])

  return (
    <div className="flex flex-col h-full">
      {/* Navigation header */}
      <div className="flex items-center gap-2 mb-4 shrink-0">
        {currentFolder ? (
          <>
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium flex items-center gap-1">
              <FolderOpen className="w-4 h-4" />
              {(currentFolder.split('/').pop() || currentFolder).toUpperCase()}
            </span>
          </>
        ) : (
          <span className="font-medium flex items-center gap-1">
            <FolderOpen className="w-4 h-4" />
            NOTES
          </span>
        )}
        <div className="flex-1" />
        <Button variant="outline" size="sm" onClick={handleResetView}>
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset View
        </Button>
      </div>

      {/* Graph container */}
      <div
        ref={containerRef}
        className="flex-1 min-h-0 rounded-lg border border-border/40 backdrop-blur-md bg-background/80 dark:bg-black/20"
      >
        {!ForceGraph2D ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Loading graph...
          </div>
        ) : (
          <ForceGraph2D
          ref={graphRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={graphData}
          onNodeHover={(node: NodeObject | null) => setHoveredNode(node as GraphNode | null)}
          nodeCanvasObject={(node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
            const graphNode = node as GraphNode
            if (graphNode.x === undefined || graphNode.y === undefined) return

            const label = graphNode.title || graphNode.id
            const isHovered = hoveredNode?.id === graphNode.id
            const isFolder = graphNode.type === 'folder'

            // Node size based on type (increased sizes)
            const baseRadius = isFolder ? 14 : 8
            const radius = isHovered ? baseRadius * 1.2 : baseRadius

            // Node color - all nodes use their assigned random color
            const nodeColor = graphNode.color || '#3b82f6'

            // Draw node
            ctx.beginPath()
            if (isFolder) {
              // Draw folder as rounded square
              const size = radius * 1.8
              const x = graphNode.x - size / 2
              const y = graphNode.y - size / 2
              const cornerRadius = 3
              ctx.roundRect(x, y, size, size, cornerRadius)
            } else {
              // Draw note as circle
              ctx.arc(graphNode.x, graphNode.y, radius, 0, 2 * Math.PI)
            }
            ctx.fillStyle = nodeColor
            ctx.fill()

            // Draw icon inside folder nodes (scales with zoom)
            if (isFolder) {
              ctx.fillStyle = isDarkMode ? '#1e293b' : '#ffffff'
              ctx.font = `bold ${radius * 0.9}px Sans-Serif`
              ctx.textAlign = 'center'
              ctx.textBaseline = 'middle'
              ctx.fillText(String(graphNode.noteCount || 0), graphNode.x, graphNode.y)
            }

            // Draw label below node
            const fontSize = 12 / globalScale
            ctx.font = `${fontSize}px Sans-Serif`
            ctx.textAlign = 'center'
            ctx.textBaseline = 'top'
            ctx.fillStyle = colors.text
            ctx.fillText(label, graphNode.x, graphNode.y + radius + 4)
          }}
          nodePointerAreaPaint={(node: NodeObject, color: string, ctx: CanvasRenderingContext2D) => {
            const graphNode = node as GraphNode
            if (graphNode.x === undefined || graphNode.y === undefined) return
            
            const isFolder = graphNode.type === 'folder'
            const baseRadius = isFolder ? 14 : 8
            
            ctx.fillStyle = color
            ctx.beginPath()
            if (isFolder) {
              // Match the square hit area to the visual square
              const size = baseRadius * 1.8
              const x = graphNode.x - size / 2
              const y = graphNode.y - size / 2
              ctx.fillRect(x, y, size, size)
            } else {
              ctx.arc(graphNode.x, graphNode.y, baseRadius, 0, 2 * Math.PI)
              ctx.fill()
            }
          }}
          onNodeClick={handleNodeClick}
          linkColor={() => colors.link}
          linkWidth={1.5}
          linkDirectionalArrowLength={6}
          linkDirectionalArrowRelPos={1}
          nodeRelSize={8}
          enableNodeDrag={true}
          cooldownTicks={100}
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
          />
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm text-muted-foreground shrink-0">
        {currentFolder === null ? (
          <span className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-blue-500" />
            Click a folder to explore notes
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Click a note to read
          </span>
        )}
      </div>
    </div>
  )
})

NoteGraph.displayName = 'NoteGraph'

export default NoteGraph
