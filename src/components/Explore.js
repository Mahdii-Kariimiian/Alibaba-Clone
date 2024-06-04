const Explore = () => {
    const exploreDetails = [
        {
            number: "200M+",
            title: "Products",
        },
        {
            number: "200K+",
            title: "Suppliers",
        },
        {
            number: "5,900",
            title: "Product Categories",
        },
        {
            number: "200+",
            title: "Countries and Regions",
        },
    ];

    return (
        <div className="p-10 text-[#1F2937] flex items-center gap-[100px] my-[150px]">
            <h2 className="text-[48px] font-bold leading-[60px] w-[60%]">
                Explore millions of offerings tailored to your business needs
            </h2>

            <div className="grid grid-cols-2 gap-8">
                {exploreDetails.map((detail) => {
                    return (
                        <div
                            key={detail.title}
                            className="border-l-4 border-gray-500 px-4"
                        >
                            <p className="text-5xl text-orange-500">
                                {detail.number}
                            </p>
                            <p>{detail.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Explore;
