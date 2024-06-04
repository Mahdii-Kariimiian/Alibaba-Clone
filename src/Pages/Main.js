import Explore from "../components/Explore";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stream from "../components/Stream";
import Hero from "../components/Hero";
import Trade from "../components/Trade";

import LayoutMobile from "../components/mobile/LayoutMobile";

const Main = () => {
    return (
        <div className="relative">
            <div>
                <div className="hidden md:block">
                    <Header />
                    <Hero />
                    <Features />
                    <Explore />
                    <Trade />
                    <Stream />
                    <Footer />
                </div>
            </div>
            <div className="absolute top-0 right-0 left-0">
                <div className="block md:hidden">
                    <LayoutMobile />
                </div>
            </div>
        </div>
    );
};

export default Main;
