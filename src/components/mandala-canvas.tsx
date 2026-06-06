import { useCallback, useEffect, useRef } from "react"

import { useAnimationFrame } from "@/hooks/use-animation-frame"
import { useCanvasSize } from "@/hooks/use-canvas-size"

import { MandalaRenderer } from "@/lib/renderer/mandala-renderer"

import type { MandalaConfig } from "@/types/mandala"

interface MandalaCanvasProps {
  config: MandalaConfig
}

export function MandalaCanvas({ config }: MandalaCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const rendererRef = useRef<MandalaRenderer>(null)

  const size = useCanvasSize(containerRef)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const ctx = canvas.getContext("2d")

    if (!ctx) {
      return
    }

    rendererRef.current = new MandalaRenderer(canvas, ctx)
  }, [])

  useEffect(() => {
    const renderer = rendererRef.current

    if (!renderer) {
      return
    }

    renderer.resize(size.width, size.height)
  }, [size])

  const frame = useCallback(
    (deltaTime: number) => {
      const renderer = rendererRef.current

      if (!renderer) {
        return
      }

      renderer.update(deltaTime, config)

      renderer.draw(config)
    },
    [config]
  )

  useAnimationFrame(frame)

  return (
    <div ref={containerRef} className="h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
