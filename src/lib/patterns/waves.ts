import { drawSymmetric } from "@/lib/canvas";
import type { PatternRenderer } from "./types";

export const renderWaves: PatternRenderer = ({
    ctx,
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

    ctx.lineWidth = 1;

    drawSymmetric(ctx, centerX, centerY, 1, () => {
        const step = (Math.PI * 2) / symmetry;

        for (let i = 0; i < symmetry; i++) {
            const aStart = step * i;
            const aEnd = step * (i + 1);

            ctx.beginPath();

            for (let s = 0; s <= steps; s++) {
                const t = s / steps;
                const angle = aStart + (aEnd - aStart) * t;
                const wave = Math.sin(t * Math.PI * 2) * amplitude;
                const dist = mid + wave;

                const x = Math.cos(angle) * dist;
                const y = -Math.sin(angle) * dist;

                if (s === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.strokeStyle = color;
            ctx.stroke();
        }
    });
};
