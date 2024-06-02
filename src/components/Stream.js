import { useState } from "react";
// Icons
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { SiAfterpay } from "react-icons/si";
import { FaEarthAsia } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
//Images
import Search from "../assets/searchـforـmatches.png";
import Identify from "../assets/Identifyـtheـrightـone.png";
import Manage from "../assets/Manageـwithـease.png";
import Fulfill from "../assets/Fulfillـwithـtransparency.png";
import Pay from "../assets/Payـwithـconfidence.png";

const Stream = () => {
    //Banner
    const [banner, setBanner] = useState(Search);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index, image) => {
        setBanner(image);
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="p-10 my-[50px] text-[#1F2937]">
            <h2 className="text-5xl mb-20 max-w-[900px] leading-[60px]">
                Streamline ordering from search to fulfillment, all in one place
            </h2>
            <div className="flex items-end justify-between ">
                <div className="min-w-[600px]">
                    {/* Section 1  */}
                    <div className="pl-10">
                        <div
                            onMouseOver={() => {
                                handleMouseOver(0, Search);
                            }}
                            // onMouseOut={handleMouseOut}
                            className="flex items-center gap-10"
                        >
                            <div
                                className={`${
                                    hoveredIndex === 0
                                        ? "p-5 bg-orange-200 rounded-full text-gray-500"
                                        : "border border-gray-500 p-5 rounded-full text-gray-500"
                                }`}
                            >
                                <FaSearch
                                    className={`${
                                        hoveredIndex === 0
                                            ? "w-[40px] h-[40px]"
                                            : "w-[30px] h-[30px]"
                                    }`}
                                />
                            </div>
                            <div className="space-y-2">
                                <div
                                    className={`flex gap-10 cursor-pointer items-center text-3xl ${
                                        hoveredIndex === 0 &&
                                        "text-amber-950 text-4xl font-bold"
                                    }`}
                                >
                                    <p>Search for matches</p>
                                </div>
                                {hoveredIndex === 0 && (
                                    <div className="text-md text-gray-500 cursor-pointer mt-2 max-w-[500px]">
                                        Search and filter from millions of
                                        product and supplier offerings to find
                                        the matching ones for your business.
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-[2px] h-10 bg-gray-500 ml-8 my-2"></div>
                        {/* Section 2  */}
                        <div
                            onMouseOver={() => {
                                handleMouseOver(1, Identify);
                            }}
                            // onMouseOut={handleMouseOut}
                            className="flex items-center gap-10 "
                        >
                            <div
                                className={`${
                                    hoveredIndex === 1
                                        ? "p-5 bg-orange-200 rounded-full text-gray-500"
                                        : "border border-gray-500 p-5 rounded-full text-gray-500"
                                }`}
                            >
                                <FaCheck
                                    className={`${
                                        hoveredIndex === 1
                                            ? "w-[40px] h-[40px]"
                                            : "w-[30px] h-[30px]"
                                    }`}
                                />
                            </div>
                            <div>
                                <div
                                    className={`flex gap-10 cursor-pointer items-center text-3xl ${
                                        hoveredIndex === 1 &&
                                        "text-amber-950 text-4xl font-bold"
                                    }`}
                                >
                                    <p>Identify the right one</p>
                                </div>
                                {hoveredIndex === 1 && (
                                    <div className="text-md text-gray-500 cursor-pointer mt-2 max-w-[500px]">
                                        Evaluate product quality and supplier
                                        capabilities easily and efficiently
                                        through verified inspections and digital
                                        sourcing tools.
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-[2px] h-10 bg-gray-500 ml-7 my-2"></div>
                        {/* Section 3  */}
                        <div
                            onMouseOver={() => {
                                handleMouseOver(2, Pay);
                            }}
                            // onMouseOut={handleMouseOut}
                            className="flex items-center gap-10 "
                        >
                            <div
                                className={`${
                                    hoveredIndex === 2
                                        ? "p-5 bg-orange-200 rounded-full text-gray-500"
                                        : "border border-gray-500 p-5 rounded-full text-gray-500"
                                }`}
                            >
                                <SiAfterpay
                                    className={`${
                                        hoveredIndex === 2
                                            ? "w-[40px] h-[40px]"
                                            : "w-[30px] h-[30px]"
                                    }`}
                                />
                            </div>
                            <div>
                                <div
                                    className={`flex gap-10 cursor-pointer items-center text-3xl ${
                                        hoveredIndex === 2 &&
                                        "text-amber-950 text-4xl font-bold"
                                    }`}
                                >
                                    <p>Pay with confidence</p>
                                </div>
                                {hoveredIndex === 2 && (
                                    <div className="text-md text-gray-500 cursor-pointer mt-2 max-w-[500px]">
                                        Pay for your order in over 20 currencies
                                        via 20+ secure payment methods,
                                        including flexible payment terms.
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-[2px] h-10 bg-gray-500 ml-7 my-2"></div>
                        {/* Section 4 */}
                        <div
                            onMouseOver={() => {
                                handleMouseOver(3, Fulfill);
                            }}
                            // onMouseOut={handleMouseOut}
                            className="flex items-center gap-10 "
                        >
                            <div
                                className={`${
                                    hoveredIndex === 3
                                        ? "p-5 bg-orange-200 rounded-full text-gray-500"
                                        : "border border-gray-500 p-5 rounded-full text-gray-500"
                                }`}
                            >
                                <FaEarthAsia
                                    className={`${
                                        hoveredIndex === 3
                                            ? "w-[40px] h-[40px]"
                                            : "w-[30px] h-[30px]"
                                    }`}
                                />
                            </div>
                            <div>
                                <div
                                    className={`flex gap-10 cursor-pointer items-center text-3xl ${
                                        hoveredIndex === 3 &&
                                        "text-amber-950 text-4xl font-bold"
                                    }`}
                                >
                                    <p>Fulfill with transparency</p>
                                </div>
                                {hoveredIndex === 3 && (
                                    <div className="text-md text-gray-500 cursor-pointer mt-2 max-w-[500px]">
                                        Get your logistics needs fulfilled with
                                        customized solutions at the Alibaba.com
                                        Logistics Marketplace, with real-time
                                        tracking for 26,000+ routes across 220
                                        countries and regions, all powered by
                                        Alibaba.com Logistics.
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-[2px] h-10 bg-gray-500 ml-7 my-2"></div>
                        {/* Section 5 */}
                        <div
                            onMouseOver={() => {
                                handleMouseOver(4, Manage);
                            }}
                            // onMouseOut={handleMouseOut}
                            className="flex items-center gap-10 "
                        >
                            <div
                                className={`${
                                    hoveredIndex === 4
                                        ? "p-5 bg-orange-200 rounded-full text-gray-500"
                                        : "border border-gray-500 p-5 rounded-full text-gray-500"
                                }`}
                            >
                                <CgProfile
                                    className={`${
                                        hoveredIndex === 4
                                            ? "w-[40px] h-[40px]"
                                            : "w-[30px] h-[30px]"
                                    }`}
                                />
                            </div>
                            <div>
                                <div
                                    className={`flex gap-10 cursor-pointer items-center text-3xl ${
                                        hoveredIndex === 4 &&
                                        "text-amber-950 text-4xl font-bold"
                                    }`}
                                >
                                    <p>Manage with ease</p>
                                </div>
                                {hoveredIndex === 4 && (
                                    <div className="text-md text-gray-500 cursor-pointer mt-2 max-w-[500px]">
                                        Check order status, manage suppliers,
                                        track payments and shipments, and
                                        contact after-sales support all via My
                                        Alibaba.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <img className="max-w-[700px]" src={banner}></img>
            </div>
        </div>
    );
};

export default Stream;
