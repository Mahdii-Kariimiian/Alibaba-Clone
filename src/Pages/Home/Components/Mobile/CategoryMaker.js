const CategoryMaker = ({ productCategories }) => {
    return (
        <div className="flex gap-3 overflow-auto text-white py-2">
            {productCategories.map((category) => {
                return (
                    <div
                        key={category.title}
                        className={`${category.color} p-3 rounded-md flex gap-1 items-center`}
                    >
                        <h3 className="min-w-[80px] text-[12px] leading-4 font-bold">
                            {category.title}
                        </h3>
                        <div className="text-2xl">{category.icon}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoryMaker;
