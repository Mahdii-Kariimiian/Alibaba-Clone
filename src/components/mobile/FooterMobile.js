import { IoMdHome } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const FooterMobile = () => {
    const icons = [
        {
            title: "Home",
            icon: <IoMdHome />,
        },
        { title: "Tips", icon: <FaEye /> },
        { title: "Messenger", icon: <RiMessengerFill /> },
        { title: "Cart", icon: <FaShoppingCart /> },
        { title: "My Alibaba", icon: <CgProfile /> },
    ];
    return (
        <div className="flex gap-3 p-5 justify-between items-center text-gray-900 ">
            {icons.map((icon) => {
                return (
                    <div
                        key={icon.title}
                        className="flex flex-col items-center"
                    >
                        <p className="text-xl">{icon.icon}</p>
                        <p className="text-[12px] whitespace-nowrap ">
                            {icon.title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default FooterMobile;
