import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderTeardropSvg: SvgPatternRenderer = ({
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
    const w = h * 0.32;
    const base = innerRadius + h * 0.05;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const d = [
            `M 0 ${-base}`,
            `C ${w} ${-(base + h * 0.3)} ${w * 1.2} ${-(base + h * 0.7)} 0 ${-outerRadius}`,
            `C ${-w * 1.2} ${-(base + h * 0.7)} ${-w} ${-(base + h * 0.3)} 0 ${-base}`,
            "Z",
        ].join(" ");

        const path = g.path(d).stroke({ color, width: 1 });
        if (config.fill) {
            path.fill(color).attr("fill-opacity", "0.28");
        } else {
            path.fill("none");
        }
    });
};
