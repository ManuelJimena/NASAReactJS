import { useState, useEffect } from 'react';
import axios from 'axios';

const useNASA = ({ today }) => {

  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "UAON1V5NHw2kBvmeW8JCJbC6hYAVtuhj03MFPSpP";
  
  const getApod = async (date) => {
    const data = await axios.get(
      `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
    );
    setApod(data.data);
  };
  
  useEffect(() => {
    getApod(date);
  }, [date]);

  return { apod, date, setDate };
};

export default useNASA;