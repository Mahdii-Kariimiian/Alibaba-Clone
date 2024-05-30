import TradeBackground from "../assets/Tradeـbackground.jpg"
import Verified from "../assets/verified.png"
import trade from "../assets/trade.png";
import { FaPlayCircle } from "react-icons/fa";

const Trade = () => {
    return (
        <div
            className={`px-10 py-24 text-white bg-cover bg-center min-h-[120vh]`}
            style={{ backgroundImage: `url(${TradeBackground})` }}
        >
            <h2 className="text-5xl mb-[100px] ">Trade with confidence from production quality to purchase protection</h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="p-12 bg-[#66564e7d] rounded-3xl space-y-6 max-w-[700px]">
                    <p>Ensure production quality with</p>
                    <img className="w-[450px]" src={Verified} alt="verified Supplier" />
                    <p>Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.</p>
                    <div className="flex gap-5 items-center">
                        <button className="border border-white flex gap-3 py-3 px-5 rounded-full"><FaPlayCircle className="text-2xl" /> Watch video</button>
                        <button className="underline text-lg font-bold"> Learn more</button>
                    </div>
                </div>
                <div className="p-12 bg-[#66564e7d] rounded-3xl space-y-6 max-w-[700px]">
                    <p>Protect your purchase with</p>
                    <img className="w-[450px]" src={trade} alt="Trade Assurance" />
                    <p>Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.</p>
                    <div className="flex gap-5 items-center">
                        <button className="border border-white flex gap-3 py-3 px-5 rounded-full"><FaPlayCircle className="text-2xl" /> Watch video</button>
                        <button className="underline text-lg font-bold"> Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trade;
