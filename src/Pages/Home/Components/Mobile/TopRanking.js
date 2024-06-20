import { useEffect, useState } from "react";
import fetchApi from "../../../../Config/axios";

const TopRanking = ({ title }) => {
    const [topProducts, setTopProducts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchApi("products");
                setTopProducts(res.data.products.slice(0, 10));
            } catch (err) {
                console.log("error: ", err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="p-5 overflow-auto">
            <h2 className="text-[#1F2937] text-xl font-bold">{title}</h2>

            {topProducts.length > 0 ? (
                <div className=" flex  gap-5">
                    {topProducts.map((product) => {
                        return (
                            <div
                                className="min-w-[150px] space-y-1"
                                key={product.id}
                            >
                                <img
                                    className="w-auto h-[150px]"
                                    src={product.images[0]}
                                    alt={product.title}
                                ></img>
                                <div className="text-center">
                                    <p className="text-sm text-[#1F2937] font-bold">
                                        {" "}
                                        Most popular{" "}
                                    </p>
                                    <p className="line-clamp-2">
                                        {" "}
                                        {product.description}{" "}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>Please wait </div>
            )}
        </div>
    );
};

export default TopRanking;
