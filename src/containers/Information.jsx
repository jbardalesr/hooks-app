import React, { useRef, useContext } from 'react';
import '../styles/components/Information.css';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

// para mandar a otra mandar a otra pagina (siguiente nivel) usamos useHistory

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null); // despues lo agregamos
  const history = useHistory();
  const { cart } = state;

  const handleSubmit = () => {
    // capturamos toda la informacion con form data y luego desestructuralo
    const formData = new FormData(form.current);
    // en vez de usar un ref para cada uno usamos formData
    const buyer = {
      name: formData.get('name'),
      email: formData.get('name'),
      address: formData.get('name'),
      apto: formData.get('name'),
      city: formData.get('name'),
      country: formData.get('name'),
      state: formData.get('name'),
      cp: formData.get('name'),
      phone: formData.get('name'),
    };

    addToBuyer(buyer);
    history.push('/checkout/payment'); //lo enviamos a la siguiente paginal
  };

  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="information-form">
          <form ref={form}>
            {' '}
            {/**le pasamos el ref de arriba */}
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="information-buttons">
          <div className="information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="information-item">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="information-item">
            <div className="information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}{' '}
        {/** del use context compartido*/}
      </div>
    </div>
  );
};

export default Information;
