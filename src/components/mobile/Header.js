import Logo from "../../assets/alibabaـorangeـlogo.png";
import { FaSearch } from "react-icons/fa";

const HeaderMobile = () => {
    return (
        <div className="bg-white text-black p-5 flex justify-between items-center gap-2 shadow-md">
            <img src={Logo} alt="Logo" width={"150px"} />
            <div className="p-2 rounded-full flex items-center gap-2 bg-gray-100">
                <FaSearch className="text-gray-500" />

                <input
                className="bg-gray-100 focus:outline-none"
                    type="text"
                    placeholder="What are you lookin for?"
                ></input>
            </div>
        </div>
    );
};

export default HeaderMobile;
