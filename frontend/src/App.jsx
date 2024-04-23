
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import About from './pages/About';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer';
import images from './constants/images';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cats' element={<ShopCategory banner={images.cat_banner} category="Cat" />} />
        <Route path='/dogs' element={<ShopCategory banner={images.dog_banner} category="Dog" />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/loginsignup" element={<LoginSignup />}/>             
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
