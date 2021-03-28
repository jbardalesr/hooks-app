import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
// context
import AppContext from '../context/AppContext';

const Products = (/*{ products }*/) => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  // funcion que agrega al carrito
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    /* CARGAR LOS DATOS DIRECTAMENTE
    <div className="products">
      <div className="products-item">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
    */
    // CARGAR LOS DATOS CON CONTEXT
    <div className="products">
      <div className="products-item">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
