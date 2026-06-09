import { type Svg } from "@svgdotjs/svg.js";
import { drawMandalaToSvg, buildMandalaSvg } from "@/lib/renderer/mandala-svg-renderer";
import type { MandalaConfig } from "@/types/mandala";
import type { SvgExportOptions } from "@/types/renderer";

export function buildMandalaSvgBrowser(
    config: MandalaConfig,
    options: SvgExportOptions,
): string {
    return buildMandalaSvg(config, { ...options, document: window.document });
}

export function drawMandalaToSvgBrowser(
    draw: Svg,
    config: MandalaConfig,
    options: SvgExportOptions,
): void {
    drawMandalaToSvg(draw, config, { ...options, document: window.document });
}

export function downloadSvg(svgString: string, filename: string): void {
    const full = `<?xml version="1.0" encoding="UTF-8"?>\n${svgString}`;
    const blob = new Blob([full], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = window.document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
}
