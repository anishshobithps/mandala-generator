import { interpolate } from "culori";

import type {
    MandalaColors,
} from "@/types/mandala";

export function getRingColor(
    ringIndex: number,
    totalRings: number,
    colors: MandalaColors,
) {
    const progress =
        ringIndex /
        Math.max(totalRings - 1, 1);

    const gradient = interpolate(
        [
            colors.primary,
            colors.secondary,
            colors.accent,
        ],
        "oklch",
    );

    return gradient(progress);
}

export function withAlpha(
    color: string,
    alpha: number,
) {
    return `color-mix(
    in oklab,
    ${color} ${alpha * 100}%,
    transparent
  )`;
}
