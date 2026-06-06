import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderDiamondsSvg: SvgPatternRenderer = ({
    group,
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    symmetry,
    color,
    config,
}) => {
    const h = (outerRadius - innerRadius) * 0.85;
    const w = h * 0.4;
    const mid = innerRadius + (outerRadius - innerRadius) * 0.5;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const d = [
            `M 0 ${-(outerRadius - h * 0.05)}`,
            `L ${w} ${-mid}`,
            `L 0 ${-(innerRadius + h * 0.05)}`,
            `L ${-w} ${-mid}`,
            "Z",
        ].join(" ");

        const path = g.path(d).stroke({ color, width: 1 });
        if (config.fill) {
            path.fill(color).attr("fill-opacity", "0.3");
        } else {
            path.fill("none");
        }
    });
};
