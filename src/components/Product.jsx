import React from 'react';

// como le estamos pasando valores en Products con handleAddToCart, hay que agregarlo
// luego de esto actualizamos el header, donde ahi esta el boton para mostrar el numero de items que se agrego
const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <div className="product-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        {/* para evitar esto ()=>... */}
        Comprar
      </button>
    </div>
  );
};
export default Product;
