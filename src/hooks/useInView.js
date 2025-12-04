import { useState, useEffect, useRef } from "react";

export function useInView(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (options.triggerOnce) {
                        observer.disconnect();
                    }
                } else {
                    // Reset visibility when element exits viewport (unless triggerOnce is true)
                    if (!options.triggerOnce) {
                        setIsVisible(false);
                    }
                }
            },
            { threshold: 0.1, ...options }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isVisible];
}
