import React from 'react';

const Products = () => {
  // Sample product data
  const products = [
    { id: 1, title: 'CRYSTAL AGATE PHONE GRIP', price: '$19.99', imageUrl: '/ring.jpg' },
    { id: 2, title: 'CRYSTAL AGATE PHONE GRIP', price: '$29.99', imageUrl: '/ring.jpg' },
    { id: 3, title: 'CRYSTAL AGATE PHONE GRIP', price: '$39.99', imageUrl: '/ring.jpg' },
    { id: 4, title: 'CRYSTAL AGATE PHONE GRIP', price: '$49.99', imageUrl: '/ring.jpg' },
    { id: 5, title: 'CRYSTAL AGATE PHONE GRIP', price: '$59.99', imageUrl: '/ring.jpg' },
    { id: 6, title: 'CRYSTAL AGATE PHONE GRIP', price: '$69.99', imageUrl: '/ring.jpg' },
    { id: 7, title: 'CRYSTAL AGATE PHONE GRIP', price: '$79.99', imageUrl: '/ring.jpg' },
    { id: 8, title: 'CRYSTAL AGATE PHONE GRIP', price: '$89.99', imageUrl: '/ring.jpg' },
  ];

  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-7">All Products</h1>

      <div className="flex justify-start w-full space-x-24 mb-8">
        <label className="text-gray-400">
          Filter:
          <select className="bg-white rounded p-2 font-bold text-black ml-1">
            <option className="text-black">All Products</option>
          </select>
        </label>

        <label className="text-gray-400">
          Sort:
          <select className="bg-white rounded p-2 font-bold text-black ml-1">
            <option className="text-black">Best Selling</option>
          </select>
        </label>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-3xl shadow-md flex flex-col items-center hover:drop-shadow-2xl">
            <img src={product.imageUrl} alt={product.title} className="h-40 w-40 object-cover mb-4" />
            <h2 className="mt-6 text-lg font-semibold">{product.title}</h2>
            <p className="text-lg text-blue-800 font-semibold mb-2">{product.price}</p>

            <button className="mt-4 text-blue-400 bg-white border border-blue-500 px-9 py-3 rounded-2xl font-semibold transition duration-200 hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white">
              BUY NOW
            </button>
          </div>
        ))}
      </div>

     
      <button className="mt-16 text-blue-400 bg-white border border-blue-500 px-9 py-3 rounded-2xl font-semibold transition duration-200 hover:bg-gradient-to-r from-blue-400 to-blue-500 hover:text-white">
        View All
      </button>
    </div>
  );
};

export default Products;
