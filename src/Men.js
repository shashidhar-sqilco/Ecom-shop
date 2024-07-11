import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Could not fetch data');
        }
        const data = await response.json();
        const menProducts = data.filter(product => product.category === "men's clothing");
        setProducts(menProducts);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-semibold mb-4">Men's Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
        <ProductCard product={product}/>
        ))}
      </div>
     
    </div>
  );
};

export default Men;