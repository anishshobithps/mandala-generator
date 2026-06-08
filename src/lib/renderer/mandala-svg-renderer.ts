import { SVG, type Svg } from "@svgdotjs/svg.js";
import { patternSvgRegistry } from "@/lib/patterns";
import { createRingGradient } from "@/lib/colors";
import { BASE_ROTATION_SPEED, SPEED_MULTIPLIER } from "@/lib/constants";
import type { MandalaConfig } from "@/types/mandala";
import type { SvgExportOptions } from "@/types/renderer";

export function drawMandalaToSvg(
    draw: Svg,
    config: MandalaConfig,
    options: SvgExportOptions,
): void {
    const doc = options.document ?? document;
    const size = options.size ?? 2048;
    const cx = size / 2;
    const cy = size / 2;

    draw.attr({
        viewBox: `0 0 ${size} ${size}`,
        preserveAspectRatio: "xMidYMid meet",
        style: options.withBackground
            ? `display:block;background-color:${config.colors.background}`
            : "display:block",
    });

    if (options.withBackground) {
        draw.rect(size, size).fill(config.colors.background).stroke("none");
    }

    const translateGroup = draw.group();
    translateGroup.attr("transform", `translate(${cx},${cy})`);

    const rotatingGroup = translateGroup.group();

    const gradient = createRingGradient(config.colors);
    const maxRadius = size * 0.35 * config.scale;

    for (let ringIndex = 0; ringIndex < config.rings; ringIndex++) {
        const outerRadius = maxRadius * ((ringIndex + 1) / config.rings);
        const innerRadius =
            ringIndex === 0
                ? maxRadius * 0.04
                : maxRadius * (ringIndex / config.rings);

        const pattern =
            config.ringPatterns[ringIndex % config.ringPatterns.length];
        const renderer = patternSvgRegistry.get(pattern);
        if (!renderer) continue;

        const progress = ringIndex / Math.max(config.rings - 1, 1);
        const color = gradient(progress);

        renderer({
            group: rotatingGroup.group(),
            centerX: 0,
            centerY: 0,
            outerRadius,
            innerRadius,
            symmetry: config.symmetry,
            complexity: config.complexity,
            color,
            config,
        });
    }

    rotatingGroup.circle(maxRadius * 0.08).center(0, 0).fill(gradient(0)).stroke("none");

    if (options.withAnimation) {
        const rotationSpeed = BASE_ROTATION_SPEED + config.speed * SPEED_MULTIPLIER;
        const safeSpeed = Math.max(rotationSpeed, BASE_ROTATION_SPEED);
        const dur = ((Math.PI * 2) / safeSpeed).toFixed(2);

        const animEl = doc.createElementNS(
            "http://www.w3.org/2000/svg",
            "animateTransform",
        );
        animEl.setAttribute("attributeName", "transform");
        animEl.setAttribute("type", "rotate");
        animEl.setAttribute("from", "0");
        animEl.setAttribute("to", "360");
        animEl.setAttribute("dur", `${dur}s`);
        animEl.setAttribute("repeatCount", "indefinite");
        rotatingGroup.node.appendChild(animEl);
    }
}

export function buildMandalaSvg(
    config: MandalaConfig,
    options: SvgExportOptions,
): string {
    const doc = options.document ?? document;

    const container = doc.createElement("div");
    (container as HTMLDivElement).style.cssText = "position:absolute;left:-9999px;top:-9999px;";
    doc.documentElement.appendChild(container);

    const draw = SVG().addTo(container).size("100%", "100%");
    draw.attr({ xmlns: "http://www.w3.org/2000/svg" });

    drawMandalaToSvg(draw, config, options);

    const svgHtml = draw.node.outerHTML;
    doc.documentElement.removeChild(container);
    return svgHtml;
}

export function downloadSvg(svgString: string, filename: string): void {
    const full = `<?xml version="1.0" encoding="UTF-8"?>\n${svgString}`;
    const blob = new Blob([full], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
}
