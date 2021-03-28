import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hooks App Merch</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TU_USER" /> {/** debe existir mi usuario*/}
        <meta name="twitter:creator" content="@TU_USER" />
        <meta name="twitter:title" content="Hooks Conf Store" />
        <meta name="twitter:description" content="Hooks Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Hooks Conf Store" />
        <meta property="og:description" content="Hooks Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="Hooksstore.xyz" />
        <meta property="og:site_name" content="Hooks Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </React.Fragment>
  );
};

export default Home;
