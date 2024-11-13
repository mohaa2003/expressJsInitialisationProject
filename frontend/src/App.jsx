import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Product from './sections/Product';
import Category from './sections/Category';
import Home from './sections/Home' ;
import Chart from './sections/Chart';
import Login from './sections/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import BlurContext from './contexts/blurContext';


function App() {
  return (
    <>
      <BlurContext>
        <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/men' element={<Category category={"mens"} banner={"/mensBanner.jpg"}/>}/>
          <Route path='/women' element={<Category category={"womens"} banner={"/womensBanner.jpg"}/>}/>
          <Route path='/kids' element={<Category category={"kids'"} banner={"/kids.jpg"}/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productid' element={<Product/>}/>
          </Route>
          <Route path='/chart' element={<Chart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      </BlurContext>
    </>
  )
}

export default App
