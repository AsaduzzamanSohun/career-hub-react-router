import Banner from "../home_components/Banner/Banner";
import Categories from "../home_components/Categories/Categories";
import Jobs from "../home_components/Jobs/Jobs";

const Home = () => {


    return (
        <div>

            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <Categories></Categories>
                <Jobs></Jobs>
            </div>


        </div>
    );
};

export default Home;