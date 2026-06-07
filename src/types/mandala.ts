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

export interface EncodedConfig {
    r: number;
    sy: number;
    co: number;
    sc: number;
    sp: number;
    an: 0 | 1;
    fi: 0 | 1;
    bg: [number, number, number];
    p: [number, number, number];
    s: [number, number, number];
    ac: [number, number, number];
    pt: string[];
}
