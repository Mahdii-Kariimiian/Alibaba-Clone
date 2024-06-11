import { useState, useEffect } from "react";

const UseWindowWidth = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const rootDiv = document.getElementById("root");
        rootDiv?.clientWidth > 768 ? setIsMobile(false) : setIsMobile(true);

        const handleResize = () => {
            rootDiv?.clientWidth > 768 ? setIsMobile(false) : setIsMobile(true);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
};

export default UseWindowWidth;
