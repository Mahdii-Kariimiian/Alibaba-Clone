import CategoryMaker from "./CategoryMaker";
import TopRanking from "./TopRanking";
import NewArrivals from "./NewArrivals";
import { ImWindows8 } from "react-icons/im";
import { PiCaretCircleDoubleLeftFill } from "react-icons/pi";

const ManufacturersMobile = () => {
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
    ];

    return (
        <div className="p-5">
        <h2 className="text-[#1F2937] font-bold">Ways to source manufacturers</h2>
            <CategoryMaker productCategories={productCategories} />
            <TopRanking title="Top-ranking manufacturers"/>
            <NewArrivals />
        </div>
    );
};

export default ManufacturersMobile;
