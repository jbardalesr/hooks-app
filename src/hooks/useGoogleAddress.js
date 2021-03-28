import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({}); // lo inicializamos con un objeto vacio
  // usamos la url
  // https://developers.google.com/maps/documentation/geocoding/overview

  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBmvDUTc90G0jJzMXN-GUauAsUDkICOYv0`;

  // un proceso asincrono
  useEffect(async () => {
    const response = await axios(API);
    // vemos el contenido del json que envia google para elegir los campos que me interesan
    console.log(response);
    setMap(response.data.results[0].geometry.location);
  }, []); // escucha un valor vacio
  // TAREA QUE HACER SI LA DIRECCION NO EXISTE
  return map;
};

export default useGoogleAddress;
