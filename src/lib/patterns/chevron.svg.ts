import { drawSymmetricSvg } from "@/lib/svg-helpers";
import type { SvgPatternRenderer } from "./types";

export const renderChevronSvg: SvgPatternRenderer = ({
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
    const notch = (outerRadius - innerRadius) * 0.35;
    const hs = Math.sin(step / 2);
    const hc = Math.cos(step / 2);

    drawSymmetricSvg(group, centerX, centerY, symmetry, (g) => {
        const d = [
            `M ${-outerRadius * hs} ${-outerRadius * hc}`,
            `L 0 ${-(outerRadius - notch)}`,
            `L ${outerRadius * hs} ${-outerRadius * hc}`,
            `L ${innerRadius * hs} ${-innerRadius * hc}`,
            `L 0 ${-(innerRadius + notch)}`,
            `L ${-innerRadius * hs} ${-innerRadius * hc}`,
            "Z",
        ].join(" ");

        const path = g.path(d).stroke({ color, width: 1 });
        if (config.fill) {
            path.fill(color).attr("fill-opacity", "0.2");
        } else {
            path.fill("none");
        }
    });
};
