import React from "react";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stream from "../components/Stream";
import Hero from "../components/Hero";

const Main = () => {
    return (
        <div className="relative">
            <div className="">
                <Header />
            </div>
            <div className="absolute top-0 right-0 left-0">
                <Hero />
                <Features />
                <Explore />
                <Stream />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
