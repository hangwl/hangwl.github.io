import { useRef, useState, useEffect, memo } from 'react'
import ForceGraph2D, { GraphData, NodeObject, LinkObject } from 'react-force-graph-2d'
import { useNavigate } from '@tanstack/react-router'

export interface NoteGraphProps {
  graph: GraphData
}

const NoteGraph = memo(({ graph }: NoteGraphProps) => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isDarkMode, setIsDarkMode] = useState(() => 
    document.documentElement.classList.contains('dark')
  );
  const [hoveredNode, setHoveredNode] = useState<NodeObject | null>(null);
  const [draggedNode, setDraggedNode] = useState<NodeObject | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect
        setDimensions({ width, height })
      })
      observer.observe(containerRef.current)
      return () => observer.disconnect()
    }
  }, [])

  const themeColor = isDarkMode ? 'rgba(226, 232, 240, 0.8)' : 'rgba(45, 55, 72, 0.8)';

  useEffect(() => {
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    mutationObserver.observe(document.documentElement, {
      attributes: true
    });

    return () => mutationObserver.disconnect();
  }, []);

  const handleNodeClick = (node: NodeObject) => {
    if (typeof node.id === 'string') {
      navigate({ to: `/notes/${node.id}` })
    }
  }

  const handleLinkClick = (link: LinkObject<any, any>) => {
    const target = link.target as NodeObject | undefined
    if (target && typeof target.id === 'string') {
      navigate({ to: `/notes/${target.id}` })
    }
  }

  return (
    <div ref={containerRef} className="w-full h-[60vh] bg-card border rounded-lg shadow-sm">
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
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.title || node.id;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;

          const isHovered = hoveredNode && hoveredNode.id === node.id;
          const isDragged = draggedNode && draggedNode.id === node.id;
          const radius = isHovered || isDragged ? 5 : 4;
          const color = isHovered || isDragged ? 'rgba(239, 68, 68, 1)' : themeColor; // red-500

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
          ctx.fillStyle = themeColor;
          ctx.fillText(label, textX, textY);
        }}
        onNodeClick={handleNodeClick}
        onLinkClick={handleLinkClick}
        linkColor={() => themeColor}
        linkDirectionalArrowLength={0}
        linkDirectionalArrowRelPos={1}
        nodeRelSize={4}
        enableNodeDrag={true}
        cooldownTicks={100}
      />
    </div>
  )
});

export default NoteGraph;
