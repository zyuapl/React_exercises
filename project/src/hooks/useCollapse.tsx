import { useState } from "react";


export function useCollapse(): {
    activeIndex: number | undefined;
    setActive: (index: number | undefined) => void;
} {

    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

    function setActive(index: number | undefined) {
        if (index === activeIndex) {
            setActiveIndex(undefined);
        } else {
            setActiveIndex(index);
        }
    }
    return {
        activeIndex,
        setActive
    };
}