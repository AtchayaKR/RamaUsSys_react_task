import './App.css';
import About from './Components/About/About';
import Cards from './Components/Cards/Card';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Residential from './Components/Residential/Residential';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Service />
      <Product />
      {/* Not implement */}
      {/* <FeaturedProduct/> */}
      <Residential />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
