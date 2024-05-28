import { AiFillAppstore } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { TbBookUpload } from "react-icons/tb";
import { ImFilesEmpty } from "react-icons/im";

const Features = () => {
    const features = [
        {
            icon: <AiFillAppstore />,
            title: "Millions of business offerings",
            description:
                "Explore products and suppliers for your business from millions of offerings worldwide.",
        },
        {
            icon: <FaCircleCheck />,
            title: "Assured quality and transactions",
            description:
                "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
        },
        {
            icon: <TbBookUpload />,
            title: "One-stop trading solution",
            description:
                "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
        },
        {
            icon: <ImFilesEmpty />,
            title: "Tailored trading experience",
            description:
                "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.",
        },
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between px-10 py-16 bg-amber-950 text-white">
            {features.map((feature) => {
                return (
                    <div
                        key={feature.title}
                        className="flex flex-col items-start gap-4 px-10 py-10 bg-orange-900 rounded-xl hover:bg-orange-950 min-h-[350px]"
                    >
                        <div className="text-3xl bg-orange-800 p-3 rounded-full ">{feature.icon}</div>
                        <h2 className="text-2xl">{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Features;
