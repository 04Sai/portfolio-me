import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReset() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (hash) {
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    window.scrollTo(0, 0);
                }
            } else {
                window.scrollTo(0, 0);
            }
            window.dispatchEvent(new Event('resize'));
        }, 800);
      
        return () => clearTimeout(timer);
    }, [pathname, hash]);

    return null;
}
