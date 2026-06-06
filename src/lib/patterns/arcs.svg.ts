import { drawSymmetricSvg, arcPathData } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderArcsSvg: SvgPatternRenderer = ({
    group,
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    symmetry,
    color,
}) => {
    const step = (Math.PI * 2) / symmetry;
    const gap = step * 0.12;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const startAngle = -step / 2 + gap;
        const endAngle = step / 2 - gap;

        // Outer arc
        g.path(arcPathData(outerRadius, startAngle, endAngle))
            .stroke({ color, width: 1.2 })
            .fill("none");

        // Inner arc
        g.path(arcPathData(innerRadius, startAngle, endAngle))
            .stroke({ color, width: 1.2 })
            .fill("none");

        // Connector at start angle
        const ox = outerRadius * Math.cos(startAngle);
        const oy = outerRadius * Math.sin(startAngle);
        const ix = innerRadius * Math.cos(startAngle);
        const iy = innerRadius * Math.sin(startAngle);

        g.path(`M ${ox} ${oy} L ${ix} ${iy}`)
            .stroke({ color, width: 1.2 })
            .fill("none");
    });
};
