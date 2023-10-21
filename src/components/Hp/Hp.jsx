import { useLoaderData } from "react-router-dom";
import HpCard from "./HpCard";
import Slider from "../Slider/Slider";

const Hp = () => {
  const products = useLoaderData();
  const filter = products.filter(p => p.brand.includes('Hp'));

  return (
      <div>

    <Slider></Slider>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-9/12 mx-auto mt-10">
      {
          filter?.map(data => <HpCard key={data._id} card={data}></HpCard> )
        }
      </div>
       
      </div>
  );


};

export default Hp;