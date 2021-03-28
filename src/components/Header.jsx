import React, { useContext } from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/">Hooks App Merch</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {/*si esta vacio o si esta lleno el carrito */}
        {cart.length > 0 && <div className="header-alert">{cart.length} </div>} {/** nested */}
      </div>
    </div>
  );
};

export default Header;
