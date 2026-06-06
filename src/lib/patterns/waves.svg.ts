import type { SvgPatternRenderer } from "./types";

export const renderWavesSvg: SvgPatternRenderer = ({
    group,
    centerX,
    centerY,
    outerRadius,
    innerRadius,
    symmetry,
    color,
}) => {
    const steps = 24;
    const mid = (outerRadius + innerRadius) * 0.5;
    const amplitude = (outerRadius - innerRadius) * 0.2;
    const step = (Math.PI * 2) / symmetry;

    const g = group.group();
    g.attr("transform", `translate(${centerX},${centerY})`);

    for (let i = 0; i < symmetry; i++) {
        const aStart = step * i;
        const aEnd = step * (i + 1);
        const pts: string[] = [];

        for (let s = 0; s <= steps; s++) {
            const t = s / steps;
            const angle = aStart + (aEnd - aStart) * t;
            const wave = Math.sin(t * Math.PI * 2) * amplitude;
            const dist = mid + wave;
            const x = Math.cos(angle) * dist;
            const y = -Math.sin(angle) * dist;
            pts.push(s === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
        }

        g.path(pts.join(" ")).stroke({ color, width: 1 }).fill("none");
    }
};
