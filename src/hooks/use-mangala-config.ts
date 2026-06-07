import { useState, useCallback, useEffect } from "react"
import { useQueryState, parseAsInteger, parseAsString } from "nuqs"
import { generateConfig, generateSeed } from "@/lib/random"
import { encodeConfig, decodeConfig } from "@/lib/config-codec"
import { PATTERNS } from "@/lib/constants"
import { DEFAULT_CONFIG } from "@/lib/defaults"
import type { MandalaConfig, PatternType } from "@/types/mandala"

export function useMandalaConfig() {
    const [seedParam, setSeedParam] = useQueryState("seed", parseAsInteger)
    const [configParam, setConfigParam] = useQueryState("c", parseAsString)

    const [config, setConfig] = useState<MandalaConfig>(() => {
        const seed = seedParam ?? generateSeed()
        if (configParam) {
            const decoded = decodeConfig(configParam, seed)
            if (decoded) return decoded
        }
        const generated = generateConfig(seed)
        return {
            ...DEFAULT_CONFIG,
            seed,
            rings: generated.rings,
            symmetry: generated.symmetry,
            complexity: generated.complexity,
            scale: generated.scale,
            ringPatterns: generated.patterns,
            colors: generated.colors,
        }
    })

    useEffect(() => {
        if (seedParam === null) void setSeedParam(config.seed)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const update = useCallback(
        (partial: Partial<MandalaConfig>) => {
            setConfig((prev) => {
                const next = { ...prev, ...partial }
                void setConfigParam(encodeConfig(next))
                return next
            })
        },
        [setConfigParam]
    )

    const updateRings = useCallback(
        (rings: number) => {
            setConfig((prev) => {
                const next: MandalaConfig = {
                    ...prev,
                    rings,
                    ringPatterns: Array.from(
                        { length: rings },
                        (_, i) =>
                            prev.ringPatterns[i] ??
                            (PATTERNS[
                                Math.floor(Math.random() * PATTERNS.length)
                            ] as PatternType)
                    ),
                }
                void setConfigParam(encodeConfig(next))
                return next
            })
        },
        [setConfigParam]
    )

    const randomize = useCallback(
        (locked: Record<string, boolean>) => {
            const seed = generateSeed()
            const generated = generateConfig(seed)
            void setSeedParam(seed)
            setConfig((prev) => {
                const next: MandalaConfig = {
                    ...prev,
                    seed,
                    rings: locked.rings ? prev.rings : generated.rings,
                    symmetry: locked.symmetry ? prev.symmetry : generated.symmetry,
                    complexity: locked.complexity ? prev.complexity : generated.complexity,
                    scale: locked.scale ? prev.scale : generated.scale,
                    ringPatterns: locked.rings ? prev.ringPatterns : generated.patterns,
                    colors: locked.colors ? prev.colors : generated.colors,
                }
                void setConfigParam(encodeConfig(next))
                return next
            })
        },
        [setSeedParam, setConfigParam]
    )

    return { config, update, updateRings, randomize }
}
