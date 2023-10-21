import { Outlet, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from '../Pages/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Apple from '../components/Apple/Apple';
import Samsung from '../components/Samsung/Samsung';
import Walton from '../components/BrandName/Walton/Walton';
import HpCard from '../components/Hp/HpCard';
import Hp from '../components/Hp/Hp';
import Lg from '../components/Lg/Lg';
import Sony from '../components/Sony/Sony';
import AppleDetails from '../components/Apple/AppleDetails';
import ExploreBrand from '../components/Explore Brand/ExploreBrand';
import SamsungDetails from '../components/Samsung/SamsungDetails';
import WaltonDetail from '../components/BrandName/Walton/WaltonDetail';
import HpDetail from '../components/Hp/HpDetail';
import LgDetail from '../components/Lg/LgDetail';
import SonnyDetail from '../components/Sony/SonnyDetail';
import UpdateProduct from '../components/UpdateProduct/UpdateProduct';
import Login from '../components/Login';
import Register from '../components/Register';
import Navbar from '../components/Header/Navbar/Navbar';
import MyCard from './MyCard/myCard';
import PrivateRoute from '../components/PrivateRoute';
const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element:
      <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },

      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },

      {

        path: "/apple",
        element: <PrivateRoute><Apple></Apple></PrivateRoute>,

        loader: () => fetch('http://localhost:5000/product'),
      },


      {
        path: "/product/:id",
        element: <AppleDetails></AppleDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },

      {
        path: "/samsung",
        element: <PrivateRoute><Samsung></Samsung></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product'),

      },

      {
        path: "/Samsung/:id",
        element: <SamsungDetails></SamsungDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),

      },

      {
        path: "/walton",
        element: <PrivateRoute><Walton></Walton></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product'),

      },

      {
        path: "/Walton/:id",
        element: <WaltonDetail></WaltonDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),

      },

      {
        path: "/hp",
        element: <PrivateRoute><Hp></Hp></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product'),

      },

      {
        path: "/Hp/:id",
        element: <HpDetail></HpDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),

      },

      {
        path: "/lg",
        element: <PrivateRoute><Lg></Lg></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product'),

      },

      {
        path: "/Lg/:id",
        element: <LgDetail></LgDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
      },

      {
        path: "/sony",
        element: <PrivateRoute><Sony></Sony></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product'),

      },

      {
        path: "/Sonny/:id",
        element: <SonnyDetail></SonnyDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),

      },

      {
        path: "/explore",
        element: <ExploreBrand></ExploreBrand>
      },

      {
        path: 'updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },

      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/navbar",
        element: <Navbar></Navbar>
      },

      {
        path: "/myCard",
        element: <MyCard></MyCard>
      },


    ]
  }
])

export default myCreatedRoute;