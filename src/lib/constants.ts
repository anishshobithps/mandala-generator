import type { PatternType } from "@/types/mandala";

export const PATTERNS: PatternType[] = [
    "petals",
    "arcs",
    "triangles",
    "diamonds",
    "polygons",
    "waves",
    "crosses",
    "teardrop",
    "chevron",
    "lotus",
];

export const MOBILE_BREAKPOINT = 640;

export const MAX_SEED = 999_999;

export const BASE_ROTATION_SPEED = 0.05;

export const SPEED_MULTIPLIER = 0.25;

export const PATTERN_INITIAL_MAP: Record<string, PatternType> = {
    p: "petals",
    a: "arcs",
    t: "triangles",
    d: "diamonds",
    o: "polygons",
    w: "waves",
    c: "crosses",
    e: "teardrop",
    h: "chevron",
    l: "lotus",
};

export function expandPattern(initial: string): PatternType {
    return PATTERN_INITIAL_MAP[initial] ?? "petals";
}

export function compressPattern(pattern: PatternType): string {
    return (
        Object.entries(PATTERN_INITIAL_MAP).find(([, v]) => v === pattern)?.[0] ?? "p"
    );
}
