import { useEffect, useState } from "react";
import fetchApi from "../../../../Config/axios";

const NewArrivals = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchApi("products");
                setProducts(res.data.products.slice(0, 10));
            } catch (err) {
                console.log("error: ", err.message);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="p-5 overflow-auto">
            <h2 className="text-[#1F2937] text-xl font-bold">New arrivals</h2>
            <div className=" flex  gap-5">
                {products.map((product) => {
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
                            <p> $ {product.price}</p>
                            <p>MOQ : {product.stock} pieces</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewArrivals;
