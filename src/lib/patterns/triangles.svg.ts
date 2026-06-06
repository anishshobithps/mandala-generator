import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderTrianglesSvg: SvgPatternRenderer = ({
    group,
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    symmetry,
    color,
    config,
}) => {
    const step = (Math.PI * 2) / symmetry;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const bx = innerRadius * Math.sin(step / 2);
        const by = innerRadius * Math.cos(step / 2);

        const d = `M 0 ${-outerRadius} L ${-bx} ${-by} L ${bx} ${-by} Z`;

        const path = g.path(d).stroke({ color, width: 1 });
        if (config.fill) {
            path.fill(color).attr("fill-opacity", "0.2");
        } else {
            path.fill("none");
        }
    });
};
