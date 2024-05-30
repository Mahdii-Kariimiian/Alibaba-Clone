import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { TbBookUpload } from "react-icons/tb";
import { ImFilesEmpty } from "react-icons/im";

const Features = () => {

    const [hoveredIndex , setHoveredIndex] = useState(null)
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

    const handleMouseLeave = ()=> {
        setHoveredIndex(null)
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between px-10 py-16 bg-[#3A190B] text-white">
            {features.map((feature , index) => {
                // setHoveredIndex(index)
                return (
                    <div
                        key={feature.title}
                        className="flex flex-col items-start gap-4 px-10 py-10 bg-[hsla(0,0%,100%,.03);] rounded-xl hover:bg-[#68200c9f] min-h-[350px] cursor-pointer"
                        onMouseOver={()=>{
                            setHoveredIndex(index)
                        }}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={`${
                                hoveredIndex === index
                                    ? "text-[40px] bg-[hsla(0,0%,100%,.08);] p-3 rounded-full text-orange-500"
                                    : "text-[40px] bg-[hsla(0,0%,100%,.08);] p-3 rounded-full text-gray-300"
                            }`}>{feature.icon}</div>
                        <h2 className="text-2xl">{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Features;
