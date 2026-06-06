import { useEffect } from "react";

export function useAnimationFrame(
    callback: (deltaTime: number) => void,
    enabled = true,
) {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        let frameId = 0;
        let previousTime = performance.now();

        const loop = (time: number) => {
            const deltaTime = time - previousTime;

            previousTime = time;

            callback(deltaTime);

            frameId = requestAnimationFrame(loop);
        };

        frameId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [callback, enabled]);
}
