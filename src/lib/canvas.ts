export function clearCanvas(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    background: string,
) {
    ctx.clearRect(
        0,
        0,
        width,
        height,
    );

    ctx.fillStyle = background;

    ctx.fillRect(
        0,
        0,
        width,
        height,
    );
}

export function drawSymmetric(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    count: number,
    draw: () => void,
) {
    const step =
        (Math.PI * 2) / count;

    for (
        let index = 0;
        index < count;
        index++
    ) {
        ctx.save();

        ctx.translate(
            centerX,
            centerY,
        );

        ctx.rotate(step * index);

        draw();

        ctx.restore();
    }
}
