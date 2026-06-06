import type { MandalaConfig } from "@/types/mandala";
import type { G } from "@svgdotjs/svg.js";

export interface SvgPatternRenderOptions {
    group: G;
    centerX: number;
    centerY: number;
    outerRadius: number;
    innerRadius: number;
    symmetry: number;
    complexity: number;
    color: string;
    config: MandalaConfig;
}

export type SvgPatternRenderer = (options: SvgPatternRenderOptions) => void;
