import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
    // Value of Input
    const [value, setValue] = useState("");

    //isClicked function
    const [isClicked, setIsClicked] = useState(false);

    // Hard coded Suggestion
    const searchTerms = [
        "iphone 15 pro max",
        "alibaba in italia",
        "electric scooter",
        "samsung a51",
        "apple watch",
        "samsung galaxy",
        "sony xperia",
        "xiaomi redmi",
        "oppo a9",
        "vivo v20",
        "realme 8",
        "google pixel",
        "nokia 5.3",
        "motorola one fusion",
        "oppo a53",
        "samsung galaxy a12",
        "xiaomi mi 11",
        "xiaomi mi 10",
        "xiaomi mi 9",
        "xiaomi mi 9t",
        "xiaomi mi 8",
        "xiaomi mi 7",
        "xiaomi mi 6",
    ];

    //Frequently Searched
    const [frequentlySearched, setFrequentlySearched] = useState([
        "electric scooter",
        "iphone 15 pro max",
        "alibaba in italia",
    ]);

    //click input function
    const handleClickInput = () => {
        setIsClicked(!isClicked);
    };

    // Search button function
    const onSearch = (searchTerm) => {
        console.log("searchTerm", searchTerm);
    };

    return (
        <div
            className={`bg-sky-800 text-white h-[89vh] pt-20 px-10 space-y-8 flex flex-col justify-center `}
        >
            <div className="flex gap-2 items-center text-xl">
                <FaCirclePlay />
                <p>Learn about Alibaba.com</p>
            </div>

            <h1 className="max-w-[1000px] leading-[60px] text-5xl font-bold">
                The leading B2B ecommerce platform for global trade
            </h1>

            <div className="relative bg-white flex items-center gap-3 p-1 rounded-full max-w-[800px]">
                <input
                    onClick={() => handleClickInput()}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    className="flex-1 ml-3 p-2 text-black "
                    placeholder="Search"
                ></input>

                <FaCamera className="text-gray-500" />

                <button
                    onClick={() => {
                        onSearch(value);
                    }}
                    className="flex gap-2 items-center px-8 py-2 text-white bg-orange-500 rounded-full"
                >
                    <FaSearch /> Search
                </button>
                {/* Recommended Section */}
                {isClicked && !value && (
                    <div className="h-[384px] absolute top-12 p-10 right-0 left-0 text-black bg-white rounded-[25px] max-w-[800px]">
                        <h2 className="text-2xl mb-5">Recommended for you</h2>
                        {frequentlySearched.map((search) => {
                            return (
                                <p className="py-2 px-4 flex gap-2 items-center border border-white rounded-full text-sm whitespace-nowrap">
                                    <FaSearch />
                                    <p>{search}</p>
                                </p>
                            );
                        })}
                    </div>
                )}

                {/* Filtered Terms */}
                {value && (
                    <div className="absolute top-12 p-3 right-0 left-0 text-black bg-white rounded-[25px] max-w-[800px]">
                        {searchTerms
                            .filter((searchTerm) => {
                                return searchTerm
                                    .toLowerCase()
                                    .includes(value.toLowerCase());
                            })
                            .slice(0, 10)
                            .map((searchTerm) => {
                                return (
                                    <p className="py-2 px-4 text-sm whitespace-nowrap">
                                        {searchTerm}
                                    </p>
                                );
                            })}
                    </div>
                )}
            </div>

            <div className="flex gap-8 items-center">
                <h3 className="whitespace-nowrap">Frequently searched:</h3>

                <div className="flex gap-4">
                    {frequentlySearched.map((search) => {
                        return (
                            <p className="py-2 px-4 border border-white rounded-full text-sm whitespace-nowrap">
                                {search}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Hero;
