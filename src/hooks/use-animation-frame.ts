import { useEffect, useRef } from "react";

interface UseAnimationFrameOptions {
    enabled?: boolean;
}

export function useAnimationFrame(
    callback: (deltaTime: number) => void,
    options: UseAnimationFrameOptions = {},
) {
    const { enabled = true } = options;

    const frameRef = useRef<number | null>(null);
    const previousTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const animate = (timestamp: number) => {
            const previous =
                previousTimeRef.current ?? timestamp;

            const deltaTime =
                timestamp - previous;

            previousTimeRef.current =
                timestamp;

            callback(deltaTime);

            frameRef.current =
                requestAnimationFrame(animate);
        };

        frameRef.current =
            requestAnimationFrame(animate);

        return () => {
            if (frameRef.current !== null) {
                cancelAnimationFrame(
                    frameRef.current,
                );
            }

            previousTimeRef.current =
                null;
        };
    }, [enabled, callback]);
}
