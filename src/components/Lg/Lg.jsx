import { useLoaderData } from "react-router-dom";
import LgCard from "./LgCard";
import Slider from "../Slider/Slider";

const Lg = () => {
  const products = useLoaderData();
  const filter = products.filter(p => p.brand.includes('Lg'));

  return (
      <div>

    <Slider></Slider>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-9/12 mx-auto mt-10">
      {
          filter?.map(data => <LgCard key={data._id} card={data}></LgCard> )
        }
      </div>
       
      </div>
  );

};

export default Lg;