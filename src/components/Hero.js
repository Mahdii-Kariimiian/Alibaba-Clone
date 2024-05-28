import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

const Hero = () => {
    const [frequentlySearched, setFrequentlySearched] = useState([
        "electric scooter",
        "iphone 15 pro max",
        "alibaba in italia",
    ]);

    return (
        <div
            className={`bg-sky-800 text-white h-[89vh] pt-20 px-10 space-y-8 flex flex-col justify-center `}
        >
            <div className="flex gap-2 items-center text-xl">
                <FaCirclePlay />
                <p>Learn about Alibaba.com</p>
            </div>
            <h1 className="max-w-[1000px] leading-[60px] text-5xl font-bold">
                The leading B2B ecommerce platform for global trade
            </h1>
            <div className="bg-white flex items-center gap-3 p-1 rounded-full max-w-[800px]">
                <input
                    type="text"
                    className="flex-1 ml-3 p-2 "
                    placeholder="Search"
                ></input>
                <FaCamera className="text-gray-500" />

                <button className="px-8 py-2 text-white bg-orange-500 rounded-full">
                    Search
                </button>
            </div>
            <div className="flex gap-8 items-center">
                <h3>Frequently searched:</h3>
                <div className="flex gap-4">
                    {frequentlySearched.map((search) => {
                        return (
                            <p className="py-2 px-4 border border-white rounded-full text-sm">
                                {search}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Hero;
