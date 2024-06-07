import TradeBackground from "../../../../assets/Tradeـbackground.jpg";
import Verified from "../../../../assets/verified.png";
import trade from "../../../../assets/trade.png";
import { FaPlayCircle } from "react-icons/fa";

const Trade = () => {
    const tradeDetails = [
        {
            title: "Ensure production quality with",
            imgSrc: Verified,
            imgAlt: "Verified Supplier",
            description:
                "Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look for the 'Verified' logo to begin sourcing with experienced suppliers your business could rely on.",
            buttons: [
                {
                    text: "Watch video",
                    icon: <FaPlayCircle className="text-2xl" />,
                },
                { text: "Learn more", isUnderline: true, isBold: true },
            ],
        },
        {
            title: "Protect your purchase with",
            imgSrc: trade,
            imgAlt: "Trade Assurance",
            description:
                "Source confidently with access to secure payment options, protection against product or shipping issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.",
            buttons: [
                {
                    text: "Watch video",
                    icon: <FaPlayCircle className="text-2xl" />,
                },
                { text: "Learn more", isUnderline: true, isBold: true },
            ],
        },
    ];

    return (
        <div
            className={`px-10 py-24 text-white bg-cover bg-center min-h-[120vh]`}
            style={{ backgroundImage: `url(${TradeBackground})` }}
        >
            <h2 className="text-5xl mb-[100px] ">
                Trade with confidence from production quality to purchase
                protection
            </h2>

            <div className="flex gap-5">
                {tradeDetails.map((detail) => {
                    return (
                        <div key={detail.title} className="p-12 bg-[#66564e7d] backdrop-blur-md rounded-3xl space-y-6 max-w-[700px]">
                            <p>{detail.title}</p>
                            <img
                                className="w-[450px]"
                                src={detail.imgSrc}
                                alt={detail.title}
                            />
                            <p>{detail.description}</p>
                            <div className="flex gap-5 items-center">
                                {detail.buttons.map((button, btnIndex) => (
                                    <button
                                        key={btnIndex}
                                        className={`flex gap-3 py-3 px-5 rounded-full ${
                                            button.isUnderline
                                                ? "underline text-lg font-bold"
                                                : "border border-white"
                                        }`}
                                    >
                                        {button.icon} {button.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Trade;
