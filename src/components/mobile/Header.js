import Logo from "../../assets/alibabaـorangeـlogo.png";
import { FaSearch } from "react-icons/fa";

const HeaderMobile = () => {
    return (
        <div className="bg-white text-black px-3 py-2 flex justify-between items-center gap-2 border-b border-gray-200">
            <img src={Logo} alt="Logo" width={"125px"} />
            <div className="px-3 py-2 rounded-full flex items-center gap-2 bg-gray-100">
                <FaSearch className="text-gray-500" />

                <input
                className="bg-gray-100 focus:outline-none"
                    type="text"
                    placeholder="What are you looking for?"
                ></input>
            </div>
        </div>
    );
};

export default HeaderMobile;
