import './App.css';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {

  return (
    <>
      <Header logo="./src/assets/Nasa_logo.png" logoAlt="logo nasa" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default App;