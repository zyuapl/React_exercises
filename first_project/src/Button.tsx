import { useState } from "react";

export default function Button() {

    const [index, setIndex] = useState(1);

    function handleClick() {
        setIndex(index + 1);
    }

    return <>
        Index: {index}
        <button onClick={handleClick}>Kliknij</button>
    </>
}