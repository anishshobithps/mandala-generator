import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderPolygonsSvg: SvgPatternRenderer = ({
    group,
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    symmetry,
    complexity,
    color,
    config,
}) => {
    const sides = 3 + (complexity % 5);
    const polyR = (outerRadius - innerRadius) * 0.8 * 0.45;
    const mid = innerRadius + (outerRadius - innerRadius) * 0.5;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const pts = Array.from({ length: sides + 1 }, (_, s) => {
            const a = (s / sides) * Math.PI * 2 - Math.PI / 2;
            const px = Math.cos(a) * polyR;
            const py = -mid + Math.sin(a) * polyR;
            return s === 0 ? `M ${px} ${py}` : `L ${px} ${py}`;
        });

        const path = g.path(pts.join(" ") + " Z").stroke({ color, width: 1 });
        if (config.fill) {
            path.fill(color).attr("fill-opacity", "0.2");
        } else {
            path.fill("none");
        }
    });
};
