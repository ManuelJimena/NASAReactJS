import "./Figure.css";
import { useState, useRef, useEffect } from "react";

const Figure = ({ data, date: initialDate, handleInput }) => {
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
    <div>
      <h2 className="title">NASA API</h2>
      <h1>Astronomy Picture of the Day</h1>
      <input
        type="date"
        id="photo-date"
        onChange={handleChange}
        value={date}
        ref={inputRef}
      />
      {date > today ? (
        <h2>Please choose a previous date</h2>
      ) : (
        <div>
          <img src={data.url} alt={data.title} />
          <div className="window">
            <div className="title-bar">
              <button aria-label="Close" className="close"></button>
              <h1 className="title">{data.title}</h1>
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

export default Figure;