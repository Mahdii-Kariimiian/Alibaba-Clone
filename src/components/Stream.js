import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { SiAfterpay } from "react-icons/si";
import { FaEarthAsia } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Stream = () => {
    return (
        <div className="p-10 my-[50px] flex items-end">
            <div>
                <h2 className="text-5xl mb-20 max-w-[900px] leading-[60px]">
                    Streamline ordering from search to fulfillment, all in one
                    place
                </h2>
                <div className="pl-10">
                    <div className="flex gap-10 cursor-pointer items-center text-3xl">
                        <FaSearch className="text-6xl text-gray-500 p-3 border border-gray-500 rounded-full" />
                        <p>Search for matches</p>
                    </div>
                    <div className="w-[2px] h-10 bg-gray-500 ml-6 my-2"></div>
                    <div className="flex gap-10 cursor-pointer items-center text-3xl">
                        <FaCheck className="text-6xl text-gray-500 p-3 border border-gray-500 rounded-full" />
                        <p>Identify the right one</p>
                    </div>
                    <div className="w-[2px] h-10 bg-gray-500 ml-6 my-2"></div>
                    <div className="flex gap-10 cursor-pointer items-center text-3xl">
                        <SiAfterpay className="text-6xl text-gray-500 p-3 border border-gray-500 rounded-full" />
                        <p>Pay with confidence</p>
                    </div>
                    <div className="w-[2px] h-10 bg-gray-500 ml-6 my-2"></div>
                    <div className="flex gap-10 cursor-pointer items-center text-3xl">
                        <FaEarthAsia className="text-6xl text-gray-500 p-3 border border-gray-500 rounded-full" />
                        <p>Fulfill with transparency</p>
                    </div>
                    <div className="w-[2px] h-10 bg-gray-500 ml-6 my-2"></div>
                    <div className="flex gap-10 cursor-pointer items-center text-3xl">
                        <CgProfile className="text-6xl text-gray-500 p-3 border border-gray-500 rounded-full" />
                        <p>Manage with ease</p>
                    </div>
                </div>
            </div>
            <div className="border-2 border-black w-[500px] h-[500px]">
                <img src=""></img>
            </div>
        </div>
    );
};

export default Stream;
