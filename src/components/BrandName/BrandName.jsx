import { Link } from "react-router-dom";
import apple2 from "../../assets/apple 2.jpg"
import Samsung from "../../assets/samsung-2.jpg"
import walton from "../../assets/walton-2.jpg"
import hp from "../../assets/hp-2.jpg"
import lg from "../../assets/lg-2.jpg"
import sonny from "../../assets/sonny-2.jpg";
import HpCard from "../Hp/HpCard";



const BrandName = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-16 mt-10 mb-10">

      <Link to="/apple">
        <div className="bg-red-400 w-9/12">
          <div>
            <h2 className="text-center">APPLE</h2>
            <img className="" src={apple2} alt="" />
          </div>
        </div>
      </Link>

      <Link to={"/samsung"}>
        <div className="bg-red-400 w-9/12">
          <h2 className="text-center">SAMSUNG</h2>
          <img className="w-[451px] " src={Samsung} alt="" />
        </div>

      </Link>

      <Link to={"/walton"}>
        <div className="bg-red-400 w-9/12">
          <h2 className="text-center">WALTON</h2>
          <img className="w-[452px]" src={walton} alt="" />
        </div>

      </Link>

      <Link to={"/hp"}>

        <div className="bg-red-400 w-9/12">
          <h2 className="text-center">HP</h2>
          <img className="w-[452px] " src={hp} alt="" />


        </div>

      </Link>

      <Link to={"/lg"}>
        <div className="bg-red-400 w-9/12">
          <h2 className="text-center">LG</h2>
          <img className="w-[450px]" src={lg} alt="" />

        </div>

      </Link>

      <Link to={"/sony"}>
        <div className="bg-red-400 w-9/12">
          <h2 className="text-center">SONNY</h2>
          <img className="w-[451px]" src={sonny} alt="" />

        </div>
      </Link>
    </div>

  );
};

export default BrandName;