import React from "react";
import CategoryMaker from "./CategoryMaker";
import NewArrivals from "./NewArrivals";
import TopRanking from "./TopRanking";
import { ImWindows8 } from "react-icons/im";
import { PiCaretCircleDoubleLeftFill } from "react-icons/pi";
import { FaShip } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const ProductsMobile = () => {
    const productCategories = [
        {
            title: "All categories",
            icon: <ImWindows8 />,
            color: "bg-[#FF6600]",
        },
        {
            title: "Request for Quotation",
            icon: <PiCaretCircleDoubleLeftFill />,
            color: "bg-[#2a5e99]",
        },
        { title: "Logistic Services", icon: <FaShip />, color: "bg-[#456756]" },
        {
            title: "Worldwide selection ",
            icon: <TbWorld />,
            color: "bg-[#2a5e50]",
        },
    ];

    return (
        <div>
            <div className="p-5">
                <h2 className="text-[#1F2937] font-bold">For your business</h2>
                <CategoryMaker productCategories={productCategories} />
            </div>
            <NewArrivals />
            <TopRanking />
        </div>
    );
};


export default ProductsMobile;
