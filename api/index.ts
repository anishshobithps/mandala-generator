import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = join(dirname(fileURLToPath(import.meta.url)), "../dist");

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const seed = url.searchParams.get("seed");
    const c = url.searchParams.get("c");

    let html = await readFile(join(distDir, "index.html"), "utf8");

    if (seed || c) {
        const ogParams = new URLSearchParams();
        if (seed) ogParams.set("seed", seed);
        if (c) ogParams.set("c", c);
        const qs = ogParams.toString();

        html = html
            .replace(
                'property="og:image" content="/api/og"',
                `property="og:image" content="/api/og?${qs}"`,
            )
            .replace(
                'name="twitter:image" content="/api/og?animated=1"',
                `name="twitter:image" content="/api/og?animated=1&${qs}"`,
            );
    }

    return new Response(html, {
        headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
        },
    });
}
