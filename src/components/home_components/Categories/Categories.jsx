import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data));

    } , [])

    return (
        <div className="py-36 space-y-10">

            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-4 gap-10">

                {

                    categories.map(category => <Category 
                        key={category.id}
                        category={category}></Category>)

                }

            </div>
            

        </div>
    );
};

export default Categories;