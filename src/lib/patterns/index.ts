import type { PatternType } from "@/types/mandala";

import { renderArcsSvg } from "./arcs.svg";
import { renderPetalsSvg } from "./petals.svg";
import { renderTrianglesSvg } from "./triangles.svg";
import { renderDiamondsSvg } from "./diamonds.svg";
import { renderPolygonsSvg } from "./polygons.svg";
import { renderWavesSvg } from "./waves.svg";
import { renderCrossesSvg } from "./crosses.svg";
import { renderTeardropSvg } from "./teardrop.svg";
import { renderChevronSvg } from "./chevron.svg";
import { renderLotusSvg } from "./lotus.svg";

import type { SvgPatternRenderer } from "./types";

export const patternSvgRegistry = new Map<PatternType, SvgPatternRenderer>([
    ["petals", renderPetalsSvg],
    ["arcs", renderArcsSvg],
    ["triangles", renderTrianglesSvg],
    ["diamonds", renderDiamondsSvg],
    ["polygons", renderPolygonsSvg],
    ["waves", renderWavesSvg],
    ["crosses", renderCrossesSvg],
    ["teardrop", renderTeardropSvg],
    ["chevron", renderChevronSvg],
    ["lotus", renderLotusSvg],
]);
