import { useState, useEffect } from "react";
import { GrLanguage } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import ItalyFlag from "../../assets/Flag_of_Italy.png";
import LogoIcon from "../../assets/Logo.png";
import OrangeLogo from "../../assets/alibabaـorangeـlogo.png";

const Header = () => {
    const [bgColor, setBgColor] = useState(
        "bg-gradient-to-b from-black to-[#ffffff00] text-white"
    );

    const handleScroll = () => {
        const scrollY = window.scrollY;
        scrollY > 1
            ? setBgColor("bg-white text-black")
            : setBgColor(
                  "bg-gradient-to-b from-black to-[#ffffff00] text-white"
              );
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`z-10 fixed top-0 right-0 left-0 px-10 py-4 flex items-center gap-6 ${bgColor}  `}
        >
            <img
                src={window.scrollY > 1 ? `${OrangeLogo}` : `${LogoIcon}`}
                className="w-[210px]"
                alt="Alibaba logo"
            />

            <div className="ml-auto whitespace-nowrap">
                <p className="text-xs">Deliver to :</p>
                <div className="w-[20px] flex items-center gap-2 ">
                    <img src={ItalyFlag} alt="Flag of Italy "></img>
                    <p> IT </p>
                </div>
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap">
                <GrLanguage className="text-xl" />
                English-EUR
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap">
                <CgProfile className="text-xl" />
                Sign in
            </div>

            <button className="px-10 pt-1 pb-2 text-white bg-orange-500 rounded-full whitespace-nowrap">
                Sign up
            </button>
        </header>
    );
};

export default Header;
