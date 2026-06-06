export type PatternType =
    | "petals"
    | "arcs"
    | "triangles"
    | "diamonds"
    | "polygons"
    | "waves"
    | "crosses"
    | "teardrop"
    | "chevron"
    | "lotus";

export interface MandalaColors {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
}

export interface MandalaConfig {
    rings: number;
    symmetry: number;
    complexity: number;
    scale: number;
    speed: number;

    fill: boolean;
    animate: boolean;

    seed: number;

    colors: MandalaColors;

    ringPatterns: PatternType[];
}

export interface GeneratedMandalaConfig {
    rings: number;
    symmetry: number;
    complexity: number;
    scale: number;

    patterns: PatternType[];

    colors: MandalaColors;
}

export interface RendererState {
    rotation: number;
    lastTimestamp?: number;
}
