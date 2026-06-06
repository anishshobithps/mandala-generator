import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderPetalsSvg: SvgPatternRenderer = ({
    group,
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    symmetry,
    color,
    config,
}) => {
    const half = (Math.PI * 2) / symmetry / 2;
    const petalRadius = (outerRadius - innerRadius) * 0.9;
    const middleRadius = innerRadius + (outerRadius - innerRadius) * 0.5;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const d = [
            `M 0 ${-innerRadius}`,
            `C ${petalRadius * Math.sin(half * 0.6)} ${-(innerRadius + petalRadius * 0.3)}`,
            `  ${petalRadius * Math.sin(half)} ${-middleRadius}`,
            `  0 ${-outerRadius}`,
            `C ${-petalRadius * Math.sin(half)} ${-middleRadius}`,
            `  ${-petalRadius * Math.sin(half * 0.6)} ${-(innerRadius + petalRadius * 0.3)}`,
            `  0 ${-innerRadius}`,
            "Z",
        ].join(" ");

        const path = g.path(d).stroke({ color, width: 1 });
        if (config.fill) {
            path.fill(color).attr("fill-opacity", "0.25");
        } else {
            path.fill("none");
        }
    });
};
