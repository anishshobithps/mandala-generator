import type {
    MandalaConfig,
    PatternType,
} from "./mandala";

export interface RenderRingOptions {
    outerRadius: number;
    innerRadius: number;

    ringIndex: number;
    totalRings: number;

    symmetry: number;
    complexity: number;

    pattern: PatternType;
}

export interface RenderContext {
    ctx: CanvasRenderingContext2D;

    centerX: number;
    centerY: number;

    config: MandalaConfig;
}
