import { useRef, useState, useEffect, memo, useMemo, useCallback } from 'react'
import ForceGraph2D, { GraphData, NodeObject, LinkObject } from 'react-force-graph-2d'
import { useNavigate } from '@tanstack/react-router'
import { useTheme } from './theme-provider'

export interface NoteGraphProps {
  graph: GraphData
}

interface CustomNodeObject extends NodeObject {
  title?: string
}

const NoteGraph = memo(({ graph }: NoteGraphProps) => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  const [hoveredNode, setHoveredNode] = useState<NodeObject | null>(null);
  const [draggedNode, setDraggedNode] = useState<NodeObject | null>(null);
  const [nodeRadii, setNodeRadii] = useState<Map<string | number, number>>(new Map());

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(entries => {
        const entry = entries[0];
        if (!entry) return;
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      })
      observer.observe(containerRef.current)
      return () => observer.disconnect()
    }
  }, [])

  // Theme-aware colors: opaque nodes, readable labels, subtle links
  const colors = useMemo(() => isDarkMode
    ? {
        node: '#e2e8f0',    // slate-200 (opaque)
        text: '#cbd5e1',    // slate-300
        link: 'rgba(226, 232, 240, 0.35)', // subtle
      }
    : {
        node: '#2d3748',    // gray-800 (opaque)
        text: '#475569',    // slate-600
        link: 'rgba(45, 55, 72, 0.3)',     // subtle
      }, [isDarkMode]);

  // Theme is derived from ThemeProvider via useTheme(); no MutationObserver needed.

  // Animate node radius changes
  useEffect(() => {
    const targetRadii = new Map<string | number, number>();
    
    graph.nodes.forEach((node) => {
      const isHovered = hoveredNode && hoveredNode.id === node.id;
      const isDragged = draggedNode && draggedNode.id === node.id;
      const targetRadius = isHovered || isDragged ? 5 : 4;
      targetRadii.set(node.id!, targetRadius);
    });

    const animationDuration = 200; // ms
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setNodeRadii((prev) => {
        const newRadii = new Map(prev);
        
        targetRadii.forEach((targetRadius, nodeId) => {
          const currentRadius = prev.get(nodeId) || 4;
          const newRadius = currentRadius + (targetRadius - currentRadius) * eased;
          newRadii.set(nodeId, newRadius);
        });
        
        return newRadii;
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [hoveredNode, draggedNode, graph.nodes]);

  const handleNodeClick = useCallback((node: NodeObject) => {
    if (typeof node.id === 'string') {
      navigate({ to: `/notes/${node.id}` })
    }
  }, [navigate])

  const handleLinkClick = useCallback((link: LinkObject) => {
    const target = link.target as NodeObject | undefined
    if (target && typeof target.id === 'string') {
      navigate({ to: `/notes/${target.id}` })
    }
  }, [navigate])

    const memoizedGraph = useMemo(() => (
    <ForceGraph2D
      width={dimensions.width}
      height={dimensions.height}
      graphData={graph}
      onNodeHover={node => !draggedNode && setHoveredNode(node)}
      onNodeDrag={node => {
        setDraggedNode(node);
        setHoveredNode(null); // Clear hover on drag start
      }}
      onNodeDragEnd={() => {
        setDraggedNode(null);
      }}
      nodeCanvasObject={(node: CustomNodeObject, ctx, globalScale) => {
        // Guard against undefined coordinates
        if (node.x === undefined || node.y === undefined) return;
        
        const label = String(node.title || node.id || '');
        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;

        const isHovered = hoveredNode && hoveredNode.id === node.id;
        const isDragged = draggedNode && draggedNode.id === node.id;
        
        // Use animated radius from state
        const radius = nodeRadii.get(node.id!) || 4;
        const color = isHovered || isDragged ? '#ef4444' : colors.node; // red-500

        // Draw node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();

        // Draw label
        const textX = node.x;
        const textY = node.y + radius + 2;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillStyle = colors.text;
        ctx.fillText(label, textX, textY);
      }}
      onNodeClick={handleNodeClick}
      onLinkClick={handleLinkClick}
      linkColor={() => colors.link}
      linkDirectionalArrowLength={0}
      linkDirectionalArrowRelPos={1}
      nodeRelSize={4}
      enableNodeDrag={true}
      cooldownTicks={100}
    />
  ), [dimensions, graph, hoveredNode, draggedNode, colors, handleNodeClick, handleLinkClick, nodeRadii]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-lg border border-border/40 backdrop-blur-md bg-background/80 dark:bg-black/20 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10"
    >
      {memoizedGraph}
    </div>
  )
});

NoteGraph.displayName = 'NoteGraph';

export default NoteGraph;
