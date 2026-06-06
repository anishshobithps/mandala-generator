import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderLotusSvg: SvgPatternRenderer = ({
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
    const midR = innerRadius + (outerRadius - innerRadius) * 0.5;

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        // Outer petal (quadratic bezier)
        const petalD = [
            `M 0 ${-innerRadius}`,
            `Q ${midR * Math.sin(half) * 1.5} ${-midR * Math.cos(half) * 0.5} 0 ${-outerRadius}`,
            `Q ${-midR * Math.sin(half) * 1.5} ${-midR * Math.cos(half) * 0.5} 0 ${-innerRadius}`,
            "Z",
        ].join(" ");

        const petal = g.path(petalD).stroke({ color, width: 1 });
        if (config.fill) {
            petal.fill(color).attr("fill-opacity", "0.2");
        } else {
            petal.fill("none");
        }

        // Inner vein
        const veinD = [
            `M 0 ${-innerRadius}`,
            `Q ${midR * Math.sin(half * 0.5) * 0.8} ${-(innerRadius + (outerRadius - innerRadius) * 0.3)} 0 ${-midR}`,
        ].join(" ");

        g.path(veinD).stroke({ color, width: 0.5 }).fill("none");
    });
};
