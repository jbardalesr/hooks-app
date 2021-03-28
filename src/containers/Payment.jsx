import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button';

const Payment = ({ history }) => {
  // history el cual da BrowserRouter
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state; // iteramos por cart

  // aqui se identifica mi cuenta
  const paypalOptions = {
    clientId:
      'Ae1rKb-UotnPoogcr5pIjZ_rReM9jEJ3vQhSlZNCFEQgmuReGG5GpPctB4AGE0SCsirvgF9O46bu-Bjx',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    //console.log(data);
    // si fue completada la transaccion, === si es igual y string
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart, // cuando no tiene a:b es igual a: a
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  // tarea crear un carpeta utils y pegar este contenido para reutilizarlo
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0); // de la funcion Array.prototype.reduce()
    return sum;
  };

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          {/**ver documentacion de paypal https://www.npmjs.com/package/react-paypal-button*/}
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()} // handleSumTotal
            onPaymentStart={() => console.log('Start Payment')} // para desencadenar acciones, pagar, vaciar, muchas veces podemos guardar la historia, por si hay un error, etc. Le mostramos un mensaje de emergencia.
            onPaymentSuccess={(data) => handlePaymentSuccess(data)} // cuando termine el pago en paypal OK(success) lo guarda en la bd
            onPaymentError={(error) => console.log(error)} // error de conexion, del usuario
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
