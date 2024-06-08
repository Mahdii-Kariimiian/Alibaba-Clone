import { useState } from "react";
import Header from "../../../../components/mobile/Header";
import Footer from "../../../../components/mobile/Footer";
import Products from "./Products";
import NewArrivals from "./NewArrivals";

const LayoutMobile = () => {
    const [show, setShow] = useState("Products");
    return (
        <div>
            <Header />
            <div className="flex gap-5 text-xl shadow-sm p-5">
                <h2>Products</h2>
                <h2>Manufacturers</h2>
            </div>
            <Products />
            < NewArrivals />
            <div className="fixed bottom-0 w-full bg-white">
                <Footer />
            </div>
        </div>
    );
};

export default LayoutMobile;
