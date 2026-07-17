import Home from "../pages/Home"
import Products from "../pages/Products";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Search from "./components/Search";
import { Routes,Route } from "react-router-dom";

function App() {

  return (
    <>
          <Header/>
          <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>} />
            
          </Routes>
          <Footer/>
         
          
    </>
  )
}

export default App
