import type { G } from "@svgdotjs/svg.js";

/**
 * SVG equivalent of drawSymmetric from canvas.ts.
 * Creates `count` rotated sub-groups inside `parent`, each offset by
 * `translate(centerX, centerY) rotate(i * stepDeg)`, then calls `drawFn`
 * with each sub-group so patterns draw in the same local coordinate space
 * as the canvas variants.
 */
export function drawSymmetricSvg(
    parent: G,
    centerX: number,
    centerY: number,
    count: number,
    drawFn: (g: G) => void,
): void {
    const stepDeg = 360 / count;
    for (let i = 0; i < count; i++) {
        const g = parent.group();
        g.attr(
            "transform",
            `translate(${centerX},${centerY}) rotate(${stepDeg * i})`,
        );
        drawFn(g);
    }
}

/**
 * Returns an SVG arc path string for a circle of radius `r` going from
 * `startAngle` to `endAngle` (radians, measured from +X axis, clockwise).
 * Equivalent to canvas ctx.arc(0, 0, r, startAngle, endAngle).
 */
export function arcPathData(
    r: number,
    startAngle: number,
    endAngle: number,
): string {
    const x1 = r * Math.cos(startAngle);
    const y1 = r * Math.sin(startAngle);
    const x2 = r * Math.cos(endAngle);
    const y2 = r * Math.sin(endAngle);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
}
