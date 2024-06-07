import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Input = ({ value, setValue , isClicked , setIsClicked , frequentlySearched }) => {
    // Value of Input

    const handleClickInput = () => {
        setIsClicked(!isClicked);
    };
    
    // Placeholder Terms
    const [placeholderTerm, setPlaceholderTerm] = useState(
        frequentlySearched[0]
    );

    setInterval(() => {
        setPlaceholderTerm(
            frequentlySearched[
                Math.floor(Math.random() * frequentlySearched.length)
            ]
        );
    }, 3000);

    // Search button function
    const onSearch = (searchTerm) => {
        console.log("searchTerm", searchTerm);
    };

    return (
        <div className="min-w-[400px] relative bg-white flex items-center gap-3 p-1 rounded-full max-w-[800px]">
            <input
                onClick={() => handleClickInput()}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                className="flex-1 ml-3 p-2 text-black  "
                placeholder={placeholderTerm}
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
        </div>
    );
};

export default Input;
