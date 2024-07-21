import './App.css'
import Map from './components/Map/Map';
import Advantages from './layouts/Advantages/Advantages';
import Comments from './layouts/Comments/Comments';
import Delivery from './layouts/Delivery/Delivery';
import Hero from './layouts/Hero/Hero'

import Menu from "./layouts/Menu/Menu";
import StocksSlider from './layouts/StocksSlider/StocksSlider';
function App() {

  return (
    <>
      <Hero />
      <Menu />
      <Advantages />
      <Delivery />
      <StocksSlider />
      <Comments />
      <Map />
    </>
  )
}

export default App
