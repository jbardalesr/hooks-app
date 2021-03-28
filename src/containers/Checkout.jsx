import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Checkout = () => {
  // traeremos dos elementos del del contexto
  const { state, removefromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removefromCart(product); // la logica esta dentro del hook
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0); // de la funcion Array.prototype.reduce()
    return sum;
  };

  return (
    <div className="checkout">
      <div className="checkout-content">
        {/** cuando hay pedidos o no hay */}
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {/** recorremos todos los items del cart */}
        {cart.map((item) => (
          <div className="checkout-item">
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      {/** mostramos el precio total si el hay contenido. Si es mayor que 0 lo mostramos con &&*/}
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
