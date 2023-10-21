import { useLoaderData } from 'react-router-dom'
import './App.css'
import ProductCard from './components/ProductCard';

function App() {

  const products = useLoaderData();

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Products Available: {products.length} </h1>
    {
      products.map(product => <ProductCard key={product._id}
      product={product}
      
      ></ProductCard>)
    }


    </>
  )
}

export default App
