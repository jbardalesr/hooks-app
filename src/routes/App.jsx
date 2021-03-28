import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/components/App.css';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
// para los hooks
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  // para el context
  const initialState = useInitialState(); // retorna dos funnciones y un estado
  return (
    <AppContext.Provider value={initialState}>
      {/*provider para el context */}
      <BrowserRouter>
        <Layout>
          {/**permite encapsular la navegacion de la app*/}
          <Switch>
            {/** es el children que se le pasa al componente */}
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route
              exact
              path="/checkout/information"
              component={Information}
            ></Route>
            <Route exact path="/checkout/payment" component={Payment}></Route>
            <Route exact path="/checkout/success" component={Success}></Route>
            <Route component={NotFound}></Route>
            {/* para el error */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
