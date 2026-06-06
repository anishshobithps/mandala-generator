import {
    BASE_ROTATION_SPEED,
    SPEED_MULTIPLIER,
} from "@/lib/constants";

import { clearCanvas } from "@/lib/canvas";

import { getRingColor } from "@/lib/colors";

import type {
    MandalaConfig,
    RendererState,
} from "@/types/mandala";

export class MandalaRenderer {
    private readonly ctx: CanvasRenderingContext2D;

    private readonly canvas: HTMLCanvasElement;

    private state: RendererState = {
        rotation: 0,
    };

    constructor(
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
    ) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    resize(
        width: number,
        height: number,
    ) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    update(
        deltaTime: number,
        config: MandalaConfig,
    ) {
        if (!config.animate) {
            return;
        }

        const rotationSpeed =
            BASE_ROTATION_SPEED +
            config.speed *
            SPEED_MULTIPLIER;

        this.state.rotation +=
            rotationSpeed *
            (deltaTime / 1000);
    }

    draw(config: MandalaConfig) {
        const width =
            this.canvas.width;

        const height =
            this.canvas.height;

        clearCanvas(
            this.ctx,
            width,
            height,
            config.colors.background,
        );

        const centerX =
            width / 2;

        const centerY =
            height / 2;

        const radius =
            Math.min(
                width,
                height,
            ) *
            0.35 *
            config.scale;

        this.ctx.save();

        this.ctx.translate(
            centerX,
            centerY,
        );

        this.ctx.rotate(
            this.state.rotation,
        );

        this.ctx.translate(
            -centerX,
            -centerY,
        );

        this.drawDebugRings(
            centerX,
            centerY,
            radius,
            config,
        );

        this.ctx.restore();
    }

    private drawDebugRings(
        centerX: number,
        centerY: number,
        maxRadius: number,
        config: MandalaConfig,
    ) {
        for (
            let ring = 0;
            ring < config.rings;
            ring++
        ) {
            const radius =
                maxRadius *
                ((ring + 1) /
                    config.rings);

            this.ctx.beginPath();

            this.ctx.arc(
                centerX,
                centerY,
                radius,
                0,
                Math.PI * 2,
            );

            this.ctx.strokeStyle =
                getRingColor(
                    ring,
                    config.rings,
                    config.colors,
                );

            this.ctx.lineWidth = 1;

            this.ctx.stroke();
        }
    }
}
