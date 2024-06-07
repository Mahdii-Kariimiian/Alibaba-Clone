import { useState } from "react";
import HeaderMobile from "../../../../components/mobile/HeaderMobile";
import FooterMobile from "../../../../components/mobile/FooterMobile";
import ProductsMobile from "./ProductsMobile";

const LayoutMobile = () => {
    const [show, setShow] = useState("Products");
    return (
        <div>
            <HeaderMobile />
            <div className="flex gap-5 text-xl shadow-sm p-5">
                <h2>Products</h2>
                <h2>Manufacturers</h2>
            </div>
            <ProductsMobile />
            <div className="fixed bottom-0 w-full bg-white">
                <FooterMobile />
            </div>
        </div>
    );
};

export default LayoutMobile;
