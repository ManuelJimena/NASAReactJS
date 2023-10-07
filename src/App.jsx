import './App.css';
import Figure from './components/Figure/Figure';
import Header from './components/Header/Header';
import useNASA from './hooks/useNASA';

const App = () => {

  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const { apod, date, setDate } = useNASA({ today });

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <>
      <Header logo="./src/assets/Nasa_logo.png" logoAlt="logo nasa" />
      <div className="App">
        <h2 className="title">
          NASA API
        </h2>
        <h1>Astronomy Picture of the Day</h1>
        <input type="date" id="photo-date" onChange={handleInput} />
        {date > today ? (
          <h2>Please choose a previous date</h2>
        ) : (
          <Figure data={apod} />
        )}
        <div className="standard-dialog center">
          <h1 className="dialog-text">@Manuel Jimena - 2023 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
        </div>
      </div>
    </>
  );
};

export default App;