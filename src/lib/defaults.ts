import type {
    MandalaColors,
    MandalaConfig,
} from "@/types/mandala";

export const DEFAULT_COLORS: MandalaColors = {
    background: "oklch(0.12 0.01 280)",
    primary: "oklch(0.90 0.24 125)",
    secondary: "oklch(0.72 0.22 45)",
    accent: "oklch(0.65 0.24 310)",
};

export const DEFAULT_CONFIG: MandalaConfig = {
    rings: 5,
    symmetry: 8,
    complexity: 5,
    scale: 1,
    speed: 0,

    fill: true,
    animate: true,

    seed: 0,

    colors: DEFAULT_COLORS,

    ringPatterns: [
        "petals",
        "lotus",
        "waves",
        "arcs",
        "diamonds",
    ],
};
