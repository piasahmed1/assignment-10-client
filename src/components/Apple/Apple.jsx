import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";
import Slider from "../Slider/Slider";


const Apple = () => {
  
  const products = useLoaderData();
    const filter = products.filter(p => p.brand.includes('Apple'));

    return (
        <div>

      <Slider></Slider>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-9/12 mx-auto mt-10">
        {
            filter?.map(data => <AppleCard key={data._id} card={data}></AppleCard> )
          }
        </div>
         
        </div>
    );

};

export default Apple;