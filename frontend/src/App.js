
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Nav from './Nav';
import About from './Components/About';
import RestaurantsMap from './Components/Restaurants'
import ProductList from './Components/Restaurant';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants" element={<RestaurantsMap />} />
        <Route path="/restaurants/:restaurantId" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
