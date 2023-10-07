import './App.css';
import Figure from './components/Figure/Figure';
import Header from './components/Header/Header';
import useNASA from './hooks/useNASA';

const App = () => {

  const { apod, getDate } = useNASA();

  return (
    <>
      <Header logo="./src/assets/Nasa_logo.png" logoAlt="logo nasa" />
        <Figure data={apod} date={getDate()} />
        <div className="standard-dialog center">
        <h1 className="dialog-text">@Manuel Jimena - 2023 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
        </div>
    </>
  );
};

export default App;