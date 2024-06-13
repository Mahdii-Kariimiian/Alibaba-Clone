import { useState } from "react";
import Header from "../../../../components/mobile/Header";
import Footer from "../../../../components/mobile/Footer";

import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />

            <div className="border-b border-gray-100 flex gap-5 text-xl shadow-sm p-5 pb-0">
                <NavLink
                    className={({ isActive }) =>
                        isActive && "border-b border-black font-bold pb-5 text-xl"
                    }
                    to="/"
                >
                    Products
                </NavLink>
                <NavLink to="manufacturers">Manufacturers</NavLink>
            </div>

            <Outlet />

            <div className="fixed bottom-0 w-full bg-white">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
