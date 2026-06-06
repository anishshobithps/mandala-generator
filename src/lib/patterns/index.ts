import type {
    PatternType,
} from "@/types/mandala";

import {
    renderArcs,
} from "./arcs";

import {
    renderPetals,
} from "./petals";

import {
    renderTriangles,
} from "./triangles";

import {
    renderDiamonds,
} from "./diamonds";

import {
    renderPolygons,
} from "./polygons";

import {
    renderWaves,
} from "./waves";

import {
    renderCrosses,
} from "./crosses";

import {
    renderTeardrop,
} from "./teardrop";

import {
    renderChevron,
} from "./chevron";

import {
    renderLotus,
} from "./lotus";

import type {
    PatternRenderer,
} from "./types";

export const patternRegistry =
    new Map<
        PatternType,
        PatternRenderer
    >([
        [
            "petals",
            renderPetals,
        ],
        [
            "arcs",
            renderArcs,
        ],
        [
            "triangles",
            renderTriangles,
        ],
        [
            "diamonds",
            renderDiamonds,
        ],
        [
            "polygons",
            renderPolygons,
        ],
        [
            "waves",
            renderWaves,
        ],
        [
            "crosses",
            renderCrosses,
        ],
        [
            "teardrop",
            renderTeardrop,
        ],
        [
            "chevron",
            renderChevron,
        ],
        [
            "lotus",
            renderLotus,
        ],
    ]);
