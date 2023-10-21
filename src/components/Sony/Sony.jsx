import { useLoaderData } from "react-router-dom";
import SonyCard from "./SonyCard";
import Slider from "../Slider/Slider";

const Sony = () => {
  const products = useLoaderData();
  const filter = products.filter(p => p.brand.includes('Sonny'));

  return (
      <div>
        <Slider></Slider>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-9/12 mx-auto mt-10">
      {
          filter?.map(data => <SonyCard key={data._id} card={data}></SonyCard> )
        }
      </div>
       
      </div>
  );

};

export default Sony;