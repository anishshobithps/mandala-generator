import { encodeColor, decodeColor } from "@/lib/colors";
import { expandPattern, compressPattern } from "@/lib/constants";
import type { EncodedConfig, MandalaConfig, PatternType } from "@/types/mandala";

export function encodeConfig(config: MandalaConfig): string {
    const obj: EncodedConfig = {
        r: config.rings,
        sy: config.symmetry,
        co: config.complexity,
        sc: Math.round(config.scale * 100),
        sp: config.speed,
        an: config.animate ? 1 : 0,
        fi: config.fill ? 1 : 0,
        bg: encodeColor(config.colors.background),
        p: encodeColor(config.colors.primary),
        s: encodeColor(config.colors.secondary),
        ac: encodeColor(config.colors.accent),
        pt: config.ringPatterns.map(compressPattern),
    };
    return btoa(JSON.stringify(obj));
}

export function decodeConfig(encoded: string, seed: number): MandalaConfig | null {
    try {
        const obj = JSON.parse(atob(encoded)) as EncodedConfig;
        return {
            seed,
            rings: obj.r,
            symmetry: obj.sy,
            complexity: obj.co,
            scale: obj.sc / 100,
            speed: obj.sp,
            animate: obj.an === 1,
            fill: obj.fi === 1,
            colors: {
                background: decodeColor(obj.bg),
                primary: decodeColor(obj.p),
                secondary: decodeColor(obj.s),
                accent: decodeColor(obj.ac),
            },
            ringPatterns: obj.pt.map(expandPattern) as PatternType[],
        };
    } catch {
        return null;
    }
}
