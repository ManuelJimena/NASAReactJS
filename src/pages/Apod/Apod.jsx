import { useState, useRef, useEffect } from "react";
import useNASA from '../../hooks/useNASA'; // importando el hook useNASA
import "./Apod.css";

const Apod = () => {
  const today = new Date().toISOString().slice(0, 10);
  const inputRef = useRef(null);
  const [date, setDate] = useState(today);
  const { apod, getApod } = useNASA(); // utilizando el hook useNASA

  useEffect(() => {
    inputRef.current.value = date;
    getApod(date);
  }, [date, getApod]);

  const handleChange = (ev) => {
    const date = ev.target.value;
    setDate(date);
  };

  return (
    <div className="apod-container">
      <h2>Astronomy Picture of the Day</h2>
      <input
        type="date"
        id="photo-date"
        onChange={handleChange}
        value={date}
        ref={inputRef}
      />
      {date > today ? (
        <h3>Please choose a previous date</h3>
      ) : (
        <div className="apod-info">
          <img src={apod.url} alt={apod.title} className="apod-img"/>
          <div className="window">
            <div className="title-bar">
              <button aria-label="Close" className="close"></button>
              <h3 className="title">{apod.title}</h3>
              <button aria-label="Resize" className="resize"></button>
            </div>
            <div className="details-bar">
              <span>{date}</span>
              <span>{apod?.copyright}</span>
            </div>
            <div className="window-pane">{apod.explanation}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apod;