import { useState, useEffect } from "react";

const UseWindowWidth = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    console.log(isMobile)

    return isMobile;
};

export default UseWindowWidth;
