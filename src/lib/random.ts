import {
    MAX_SEED,
    PATTERNS,
} from "@/lib/constants";

import type {
    GeneratedMandalaConfig,
    MandalaColors,
    PatternType,
} from "@/types/mandala";

export function createSeededRandom(
    seed: number,
) {
    let state = seed >>> 0;

    return () => {
        state =
            (Math.imul(state, 1664525) +
                1013904223) >>>
            0;

        return state / 0x100000000;
    };
}

function randomOklchColor(
    random: () => number,
) {
    const lightness =
        0.55 + random() * 0.3;

    const chroma =
        0.12 + random() * 0.18;

    const hue =
        Math.floor(random() * 360);

    return `oklch(${lightness.toFixed(3)} ${chroma.toFixed(3)} ${hue})`;
}

function randomBackground(
    random: () => number,
) {
    const lightness =
        0.04 + random() * 0.08;

    const chroma =
        0.002 + random() * 0.01;

    const hue =
        Math.floor(random() * 360);

    return `oklch(${lightness.toFixed(3)} ${chroma.toFixed(3)} ${hue})`;
}

function generateColors(
    random: () => number,
): MandalaColors {
    return {
        background:
            randomBackground(random),

        primary:
            randomOklchColor(random),

        secondary:
            randomOklchColor(random),

        accent:
            randomOklchColor(random),
    };
}

export function generateConfig(
    seed: number,
): GeneratedMandalaConfig {
    const random =
        createSeededRandom(seed);

    const rings =
        2 + Math.floor(random() * 7);

    const symmetryOptions = [
        4,
        6,
        8,
        10,
        12,
        16,
        20,
        24,
    ];

    const symmetry =
        symmetryOptions[
        Math.floor(
            random() *
            symmetryOptions.length,
        )
        ];

    const complexity =
        1 + Math.floor(random() * 10);

    const scale =
        0.5 +
        Math.round(random() * 7) * 0.05;

    const patterns: PatternType[] =
        Array.from(
            { length: rings },
            () =>
                PATTERNS[
                Math.floor(
                    random() *
                    PATTERNS.length,
                )
                ],
        );

    return {
        rings,
        symmetry,
        complexity,
        scale,
        patterns,
        colors:
            generateColors(random),
    };
}

export function generateSeed() {
    return Math.floor(
        Math.random() * MAX_SEED,
    );
}
