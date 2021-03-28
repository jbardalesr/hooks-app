import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removefromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  // estructura similar a Redux
  const addToBuyer = (payload) => {
    setState({
      // significado: traemos el estado que tengamos y al comprador lo que este en estate.buyer mas payload
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return { addToCart, removefromCart, addToBuyer, addNewOrder, state };
};

export default useInitialState;
