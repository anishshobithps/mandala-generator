import { useEffect, useRef } from "react";

export function useAnimationFrame(
    callback: (deltaTime: number) => void,
    enabled = true,
) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        let frameId = 0;
        let previousTime = performance.now();

        const loop = (time: number) => {
            const deltaTime = time - previousTime;

            previousTime = time;

            callbackRef.current(deltaTime);

            frameId = requestAnimationFrame(loop);
        };

        frameId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [enabled]);
}
