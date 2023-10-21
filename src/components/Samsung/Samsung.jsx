import { useLoaderData } from "react-router-dom";
import SamsungCard from "./SamsungCard";
import Slider from "../Slider/Slider";

const Samsung = () => {
  const products = useLoaderData();
  const filter = products.filter(p => p.brand.includes('Samsung'));

  return (
      <div>
        <Slider></Slider>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-9/12 mx-auto mt-10">
      {
          filter?.map(data => <SamsungCard key={data._id} card={data}></SamsungCard> )
        }
      </div>
       
      </div>
  );
};

export default Samsung;