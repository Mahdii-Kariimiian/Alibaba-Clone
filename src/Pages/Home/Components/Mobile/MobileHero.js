import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Products from "./Products";
import Manufacturers from "./Manufacturers";

const MobileHero = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Products />} />
                    <Route path="/manufacturers" element={<Manufacturers />} />
                </Route>
            </Routes>
        </div>
    );
};

export default MobileHero;
