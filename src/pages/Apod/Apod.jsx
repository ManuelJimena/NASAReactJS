import "./Apod.css";
import { useState, useRef, useEffect } from "react";

const Apod = ({ data, date: initialDate, handleInput }) => {
  const today = new Date().toISOString().slice(0, 10);
  const inputRef = useRef(null);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    inputRef.current.value = date;
  }, [date]);

  const handleChange = (ev) => {
    const date = ev.target.value;
    setDate(date);
    handleInput(date);
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
          <img src={data.url} alt={data.title} className="apod-img"/>
          <div className="window">
            <div className="title-bar">
              <button aria-label="Close" className="close"></button>
              <h3 className="title">{data.title}</h3>
              <button aria-label="Resize" className="resize"></button>
            </div>
            <div className="details-bar">
              <span>{date}</span>
              <span>{data?.copyright}</span>
            </div>
            <div className="window-pane">{data.explanation}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apod;