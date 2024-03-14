import { useState, useEffect } from "react"; // Importa useState y useEffect desde React
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Harticles from "./components/pages/Harticles";
import About from "./components/pages/Bout";
import Form from "./components/pages/Form";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import Details from "./components/pages/Details";
import products from "./assets/data/products"
import Payrecieve from "./components/pages/Payrecieve";



function App() {
  
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
 

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);



  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id)

    if (existingProductIndex !== -1){
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart)
    }else{
    const newProduct = { ...product, quantity: 1}
    const newCart = [...cart, newProduct]
    setCart(newCart)
  }
}
const increaseQuantity = (index) => {
  const newCart = [...cart];
  newCart[index].quantity++;
  setCart(newCart);
};

const decreaseQuantity = (index) => {
  const newCart = [...cart];
  if (newCart[index].quantity > 1) {
    newCart[index].quantity--;
    setCart(newCart);
  }
};

const removeItem = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
};

const calculateTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
 
};


const calculateTotalItems = () => {
  let totalItems = 0;
  cart.forEach((item) => {
    totalItems += item.quantity;
  });
  return totalItems;
};
 
  return (
    <div className="">
      <Navbar cart={cart} />
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Harticles" exact element={<Harticles addToCart={addToCart} products={products} />} />
        <Route path="/Harticles/Details/:id" element={<Details products={products} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}  cart={cart} setCart={cart} addToCart={addToCart}/>} />
         <Route path="/About" exact element={<About />} />
        <Route path="/Harticles/Cart" exact element={<Cart cart={cart} setCart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} calculateTotal={calculateTotal}/>} />
        <Route path="/Harticles/Form" exact element={<Form cart={cart} calculateTotal={calculateTotal}calculateTotalItems={calculateTotalItems}  /> } />
        <Route path="/Payrecieve" exact element={ <Payrecieve />} />
      </Routes>
    </div>
  );
}

export default App;
