import {
    useEffect,
    useState,
} from "react";

interface CanvasSize {
    width: number;
    height: number;
}

export function useCanvasSize(
    containerRef: React.RefObject<HTMLElement | null>,
) {
    const [size, setSize] =
        useState<CanvasSize>({
            width: 0,
            height: 0,
        });

    useEffect(() => {
        const element =
            containerRef.current;

        if (!element) {
            return;
        }

        const observer =
            new ResizeObserver(
                ([entry]) => {
                    setSize({
                        width:
                            entry.contentRect.width,
                        height:
                            entry.contentRect.height,
                    });
                },
            );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [containerRef]);

    return size;
}
