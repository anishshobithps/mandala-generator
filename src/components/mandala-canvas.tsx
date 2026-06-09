import { useRef, useEffect } from "react"
import { SVG } from "@svgdotjs/svg.js"
import { drawMandalaToSvgBrowser } from "@/lib/renderer/mandala-svg-browser"
import type { MandalaConfig } from "@/types/mandala"

interface MandalaCanvasProps {
  config: MandalaConfig
}

const LIVE_SIZE = 1024

export function MandalaCanvas({ config }: MandalaCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ""

    const draw = SVG().addTo(container).size("100%", "100%")
    draw.attr({ xmlns: "http://www.w3.org/2000/svg" })

    drawMandalaToSvgBrowser(draw, config, {
      withAnimation: config.animate,
      withBackground: true,
      size: LIVE_SIZE,
    })

    return () => {
      container.innerHTML = ""
    }
  }, [config])

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      role="img"
      aria-label="Generated mandala"
    />
  )
}
