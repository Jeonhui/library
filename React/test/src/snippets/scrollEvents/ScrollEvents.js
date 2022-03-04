import {useEffect, useState} from "react";


export function ScrollEvent(){
    const [scrollY, setScrollY] = useState(0);
    const handleListener = (e) => {
        setScrollY(window.scrollY);
        console.log(e);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleListener)
    }, [])
}
