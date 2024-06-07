import { cloneElement, useState } from "react";
// Icons
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { SiAfterpay } from "react-icons/si";
import { FaEarthAsia } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
//Images
import Search from "../../../../assets/searchـforـmatches.png";
import Identify from "../../../../assets/Identifyـtheـrightـone.png";
import Manage from "../../../../assets/Manageـwithـease.png";
import Fulfill from "../../../../assets/Fulfillـwithـtransparency.png";
import Pay from "../../../../assets/Payـwithـconfidence.png";

const Stream = () => {
    //Banner
    const [banner, setBanner] = useState(Search);

    const streamDetails = [
        {
            title: "Search for matches",
            icon: <FaSearch className="w-10 h-10" />,
            description:
                "Search and filter from millions of product and supplier offerings to find the matching ones for your business.",
            src: Search,
        },

        {
            title: "Identify the right one",
            icon: <FaCheck className="w-10 h-10" />,
            description:
                "Evaluate product quality and supplier capabilities easily and efficiently through verified inspections and digital sourcing tools.",
            src: Identify,
        },
        {
            title: "Pay with confidence",
            icon: <CgProfile className="w-10 h-10" />,
            description:
                "Securely and easily pay for your orders with a variety of payment options, including credit card, debit card, and PayPal.",
            src: Pay,
        },
        {
            title: "Fulfill with transparency",
            icon: <FaEarthAsia className="w-10 h-10" />,
            description:
                " Get your logistics needs fulfilled with customized solutions at the Alibaba.com Logistics Marketplace, with real-time tracking for 26,000+ routes across 220 countries and regions, all powered by Alibaba.com Logistics.",
            src: Fulfill,
        },
        {
            title: "Manage with ease",
            icon: <SiAfterpay className="w-10 h-10" />,
            description:
                "Check order status, manage suppliers, track payments and shipments, and contact after-sales support all via My Alibaba.",
            src: Manage,
        },
    ];

    return (
        <div className="p-10 my-[50px] text-[#1F2937] ">
            <h2 className="text-5xl mb-20 max-w-[900px] leading-[60px]">
                Streamline ordering from search to fulfillment, all in one place
            </h2>

            <div className="relative flex items-end justify-between ">
                <div className="space-y-6">
                    <div className="absolute z-[-10] top-[50px] left-[38px] bg-gray-500 h-[480px] w-[3px]"></div>
                    {streamDetails.map((detail) => {
                        return (
                            <div
                                key={detail.title}
                                onMouseOver={() => {
                                    setBanner(detail.src);
                                }}
                                className=" group flex items-center gap-10"
                            >
                                <div className="flex justify-center items-center bg-white w-[80px] h-[80px]">
                                    <div
                                        className={
                                            "w-[70px] h-[70px] border border-gray-500 flex justify-center items-center bg-white group-hover:border-none group-hover:bg-orange-200 group-hover:w-[80px]  group-hover:h-[80px]  rounded-full text-gray-500"
                                        }
                                    >
                                        {detail.icon}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div
                                        className={
                                            "flex gap-10 cursor-pointer items-center text-3xl group-hover:font-bold group-hover:text-amber-950 group-hover:text-4xl"
                                        }
                                    >
                                        <p>{detail.title}</p>
                                    </div>

                                    <div className="text-md hidden text-gray-500 cursor-pointer mt-2 max-w-[500px] group-hover:block">
                                        {detail.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <img className="max-w-[700px]" src={banner}></img>
                </div>
            </div>
        </div>
    );
};

export default Stream;
