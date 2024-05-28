import React from "react";
import { GrLanguage } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import ItalyFlag from "../assets/Flag_of_Italy.png";
import LogoIcon from "../assets/Logo.png";

const Header = () => {
    return (
        <header className="absolute top-0 right-0 left-0 px-10 py-4 flex text-white items-center gap-6 bg-gradient-to-b from-black to-[#ffffff00]">
            <div className="w-[210px]">
                <img src={LogoIcon} className="" alt="Alibaba logo" />
            </div>
            <div className="ml-auto">
                <p className="text-xs">Deliver to:</p>
                <div className="w-[20px] flex items-center gap-1">
                    <img src={ItalyFlag} alt="Flag of Italy "></img> <p> IT </p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <GrLanguage />
                English-EUR
            </div>

            <div className="flex items-center gap-2">
                <CgProfile />
                Sign in
            </div>

            <button className="px-10 py-1 text-white bg-orange-500 rounded-full">
                Sign up
            </button>
        </header>
    );
};

export default Header;
