import Explore from "./Components/Desktop/Explore";
import Features from "./Components/Desktop/Features";
import Footer from "../../components/Desktop/Footer";
import Header from "../../components/Desktop/Header";
import Stream from "./Components/Desktop/Stream";
import Hero from "./Components/Desktop/Hero";
import Trade from "./Components/Desktop/Trade";
import UseWindowWidth from "../../hooks/UseWindowWidth";
import MobileHero from "../../Pages/Home/Components/Mobile/MobileHero";

const Main = () => {
    // Custom hook for window width
    const isMobile = UseWindowWidth();

    return (
        <div className="relative">
            <div>
                {isMobile ? (
                    <div className="absolute top-0 right-0 left-0">
                        <MobileHero />
                    </div>
                ) : (
                    <div>
                        <Header />
                        <Hero />
                        <Features />
                        <Explore />
                        <Trade />
                        <Stream />
                        <Footer />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
