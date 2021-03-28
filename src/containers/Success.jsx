import React, { useContext } from 'react'; // hacemos useContexto en todos los compomnentes donde se quiere acceder al estado
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  // longitud y latitud
  const location = useGoogleAddress(buyer[0].address); // utilizamos el contexto

  return (
    <div className="success">
      <div className="success-content">
        <h2>{`${buyer[0].name}, Gracias por su compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
