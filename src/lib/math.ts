export function degreesToRadians(
    degrees: number,
) {
    return (
        degrees * (Math.PI / 180)
    );
}

export function clamp(
    value: number,
    min: number,
    max: number,
) {
    return Math.min(
        Math.max(value, min),
        max,
    );
}

export function lerp(
    start: number,
    end: number,
    amount: number,
) {
    return start + (end - start) * amount;
}
