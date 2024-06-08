import { useEffect, useState } from "react";
import axios from "axios";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Background from "../../../../assets/hero-background.jpg";
import fetchData from "../../../../Config/axios";

const Hero = () => {
    ////////STATES and VARIABLES//////////
    // Products from API
    const [products, setProducts] = useState([]);
    // Value of Input
    const [value, setValue] = useState("");
    // IsClicked state
    const [isClicked, setIsClicked] = useState(false);
    // Placeholder Term
    const [placeholderTerm, setPlaceholderTerm] = useState("");
    // Hard coded Frequently Searched
    const frequentlySearched = [
        "Powder Canister",
        "Red Nail Polish",
        "Chanel Coco Noir Eau De",
    ];

    ////////USE EFFECTS//////////
    useEffect(() => {
        //Fetch API with searched term after 0.5 second from the last change of the value
        const timeoutId = setTimeout(() => {
            value &&
                fetchData(`/products/search?` , {
                    params : {
                        q : value
                    }
                })
                    .then((res) => {
                        const fetchedProducts = res.data.products;
                        setProducts(fetchedProducts);
                        setPlaceholderTerm(frequentlySearched[0]);
                    })
                    .catch((err) => {
                        console.log("error: ", err.message);
                    });
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [value]);

    useEffect(() => {
        // Change the placeholder Term
        if (frequentlySearched.length > 0) {
            const placeHolderInterval = setInterval(() => {
                setPlaceholderTerm(
                    frequentlySearched[
                        Math.floor(Math.random() * frequentlySearched.length)
                    ]
                );
            }, 3000);

            return () => {
                clearInterval(placeHolderInterval);
            };
        }
    }, [frequentlySearched]);

    useEffect(() => {
        // Check if the click is outside the input and the dropdown
        const handleClickOutside = (event) => {
            if (
                !event.target.closest(".input-container") &&
                !event.target.closest(".dropdown-container")
            ) {
                setIsClicked(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    ////////FUNCTIONS//////////
    // Search button function
    const onSearch = (searchTerm) => {
        console.log("searchTerm", searchTerm);
    };
    // Click input function
    const handleClickInput = (e) => {
        e.stopPropagation();
        setIsClicked(true);
    };
    //Handle Value change
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div
            className={`bg-sky-800 text-white h-[89vh] bg-center bg-cover pt-20 px-10 space-y-8 flex flex-col justify-center`}
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="flex gap-2 items-center text-xl">
                <FaCirclePlay />
                <p>Learn about Alibaba.com</p>
            </div>

            <h1 className="max-w-[1000px] leading-[60px] text-5xl font-bold">
                The leading B2B ecommerce platform for global trade
            </h1>

            <div className="min-w-[400px] relative bg-white flex items-center gap-3 p-1 rounded-full max-w-[800px] input-container">
                <input
                    onClick={handleClickInput}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    className="focus:outline-none flex-1 ml-3 p-2 text-black"
                    placeholder={placeholderTerm}
                />

                <FaCamera className="text-gray-500" />

                <button
                    onClick={() => onSearch(value)}
                    className="flex gap-2 items-center px-8 py-2 text-white bg-orange-500 rounded-full"
                >
                    <FaSearch /> Search
                </button>

                {/* Recommended Section */}
                {isClicked && !value && (
                    <div className="h-[384px] absolute top-12 p-10 right-0 left-0 text-black bg-white rounded-[25px] max-w-[800px] dropdown-container">
                        <h2 className="text-2xl mb-5">Recommended for you</h2>
                        {frequentlySearched.map((search, index) => (
                            <div
                                key={index}
                                className="py-2 px-4 flex gap-2 items-center border border-white rounded-full text-sm whitespace-nowrap"
                            >
                                <FaSearch />
                                <p>{search}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Filtered Terms */}
                {isClicked && value && (
                    <div className="absolute top-12 p-3 right-0 left-0 text-black bg-white rounded-[25px] max-w-[800px] dropdown-container">
                        {products
                            .filter((product) =>
                                product.title
                                    .toLowerCase()
                                    .includes(value.toLowerCase())
                            )
                            .slice(0, 10)
                            .map((product, index) => (
                                <p
                                    key={index}
                                    className="py-2 px-4 text-sm whitespace-nowrap"
                                >
                                    {product.title}
                                </p>
                            ))}
                    </div>
                )}
            </div>

            <div className="flex gap-8 items-center">
                <h3 className="whitespace-nowrap">Frequently searched:</h3>

                <div className="flex gap-4">
                    {frequentlySearched.slice(0, 3).map((search, index) => (
                        <p
                            key={index}
                            className="py-2 px-4 border border-white rounded-full text-sm whitespace-nowrap"
                        >
                            {search}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
