import Banner from "../../components/Banner/Banner";
import BrandName from "../../components/BrandName/BrandName";
import ExploreBrand from "../../components/Explore Brand/ExploreBrand";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <div>
      {/* <h2 className="text-3xl">This is Home for: </h2> */}
      <Banner></Banner>
      <ExploreBrand></ExploreBrand>
      <BrandName></BrandName>
      <Footer></Footer>
    </div>
  );
};

export default Home;