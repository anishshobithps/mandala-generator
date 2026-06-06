import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderCrossesSvg: SvgPatternRenderer = ({
    group,
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    symmetry,
    color,
}) => {
    const arm = (outerRadius - innerRadius) * 0.35;
    const mid = innerRadius + (outerRadius - innerRadius) * 0.5;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const d = [
            `M ${-arm} ${-mid} L ${arm} ${-mid}`,
            `M 0 ${-(mid + arm)} L 0 ${-(mid - arm)}`,
        ].join(" ");

        g.path(d).stroke({ color, width: 1.2 }).fill("none");
    });
};
