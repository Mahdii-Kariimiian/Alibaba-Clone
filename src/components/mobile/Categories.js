

const Categories = ({productCategories}) => {
   

    return (
        <div className="flex gap-5 overflow-auto text-white p-5 " >
            {productCategories.map((category) => {
                console.log(category.color)
                return (
                    <div key={category.title} className={`${category.color} px-3 py-2 rounded-md flex gap-5 items-center`}>
                        <h3 className="w-[100px]">{category.title}</h3>
                        <div className="text-2xl">{category.icon}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
