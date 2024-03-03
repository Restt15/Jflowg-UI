import React, { useState, useEffect } from "react"; // Importa useState y useEffect desde React
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Harticles from "./components/pages/Harticles";
import About from "./components/pages/Bout";
import Form from "./components/pages/Form";
import Cart from "./components/pages/Cart";

function App() {
  
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = React.useState(initialCart);
  const [total, setTotal] = React.useState(0);  
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // El producto ya está en el carrito, aumenta su cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, agrégalo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

 
  return (
    <div className="">
      <Navbar cart={cart} />
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Harticles" exact element={<Harticles addToCart={addToCart}/>} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Harticles/Cart" exact element={<Cart cart={cart} subtotal={subtotal} total={total} setCart={setCart}/>} />
        <Route path="/Harticles/Form" exact element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
