import React from "react";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stream from "../components/Stream";
import Hero from "../components/Hero";
import Trade from "../components/Trade";

const Main = () => {
    return (
        <div className="relative">
            <Header/>

            <div className="absolute top-0 right-0 left-0">
                <Hero />
                <Features />
                <Explore />
                <Trade />
                <Stream />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
