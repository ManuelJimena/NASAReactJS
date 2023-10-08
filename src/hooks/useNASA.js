import { useState, useEffect } from 'react';
import axios from 'axios';

const useNASA = () => {
  const [apod, setApod] = useState({});
  const NASA_URL = "https://api.nasa.gov/";
  const env = "UAON1V5NHw2kBvmeW8JCJbC6hYAVtuhj03MFPSpP"; 
  // const env = import.meta.env.VITE_NASA_API_KEY;

  const getApod = async (date) => {
    const data = await axios.get(
      `${NASA_URL}planetary/apod?date=${date}&api_key=${env}`
    );
    setApod(data.data);
  };

  const getDate = () => {
    const today = new Date(Date.now()).toISOString().slice(0, 10);
    return today;
  };

  useEffect(() => {
    getApod(getDate()); // cambiado para obtener APOD en la fecha actual
  }, []);

  return { apod, getDate, getApod };
};

export default useNASA;