import React from "react";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import FooterMobile from "../../../../components/mobile/FooterMobile";

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
            <Categories productCategories={productCategories} />
            <NewArrivals />
        </div>
    );
};

export default ProductsMobile;
