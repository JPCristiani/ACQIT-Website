import { useState, useEffect } from 'react';

export default function IsVisible(options) {
    const [ref, setRef] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }
        return () => {
            if (ref) {
                observer.disconnect();
            }
        };
    }, [ref, options]);

    return [setRef, visible];
}
