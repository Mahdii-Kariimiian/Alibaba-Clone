const Explore = () => {
    return (
        <div className="p-10 text-[#1F2937] flex items-center gap-[100px] my-[150px]">
            <h2 className="text-[48px] font-bold leading-[60px] w-[60%]">
                Explore millions of offerings tailored to your business needs
            </h2>
            <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-gray-500 px-4">
                    <p className="text-5xl text-orange-500">200M+</p>
                    <p>Products</p>
                </div>
                <div className="border-l-4 border-gray-500 px-4">
                    <p className="text-5xl text-orange-500">200K+</p>
                    <p>Suppliers</p>
                </div>
                <div className="border-l-4 border-gray-500 px-4">
                    <p className="text-5xl text-orange-500">5,900</p>
                    <p className="whitespace-nowrap">Product Categories</p>
                </div>
                <div className="border-l-4 border-gray-500 px-4">
                    <p className="text-5xl text-orange-500">200+</p>
                    <p className="whitespace-nowrap">Countries and Regions</p>
                </div>
            </div>
        </div>
    );
};

export default Explore;
