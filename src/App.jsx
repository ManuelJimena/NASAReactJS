import './App.css';
import { Outlet } from 'react-router-dom'
import Figure from './components/Figure/Figure';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useNASA from './hooks/useNASA';

const App = () => {
  const { apod, getDate, getApod } = useNASA();

  const handleInput = (date) => {
    getApod(date);
  };

  return (
    <>
      <Header logo="./src/assets/Nasa_logo.png" logoAlt="logo nasa" />
      <Figure data={apod} date={getDate()} handleInput={handleInput} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default App;