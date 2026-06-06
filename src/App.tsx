import { DEFAULT_CONFIG } from "@/lib/defaults"

import { MandalaCanvas } from "@/components/mandala-canvas"

export default function App() {
  return (
    <div className="h-dvh w-full overflow-hidden">
      <MandalaCanvas config={DEFAULT_CONFIG} />
    </div>
  )
}
