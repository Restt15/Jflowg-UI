import { Breadcrumbs } from "@mui/material"
import React from "react"
import Producto1 from "../../assets/Toproducts/Snegro.png.jpeg"
import { useState } from 'react';

import { Card, CardHeader, CardBody, CardFooter, Typography, Button,} from "@material-tailwind/react"
import { CiShoppingCart } from "react-icons/ci"

const data = [
  
  {
    id: 1,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1

  },
  {
    id: 2,
    title: "Camisas",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 3,
    title: "Sueter",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1

  },
  {
    id: 4,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 5,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 6,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 7,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 8,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 9,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 10,
    title: "Pantalones",
    category: "Zapatillas",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 11,
    title: "Pantalones",
    category: "Zapatillas",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 12,
    title: "Pantalones",
    category: "Zapatillas",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00,
    quantity: 1
  },
  {
    id: 13,
    title: "Pantalones",
    category: "Accesorios",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 40.00,
    quantity: 1
  },
]



const Harticles = () => {
    const [foods, setFoods] = React.useState(data);
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
      setIsOpen(!isOpen);
    };


    const addToCart = (product) => {
      const existingProduct = cart.find(item => item.title === product.title);

      if(existingProduct) {
        existingProduct.quantity++;
        setCart([...cart]);
    }else{
      setCart([...cart, {...product, quantity: 1}]);
    }
  }

    const increaseQuantity = (index) => {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
    }

    const decreaseQuantity = (index) => {
      const newCart = [...cart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      }
      setCart(newCart);
    
  }
   
    // filtro para categoria  
  const filterType = (category) => {
    setFoods(
      data.filter((item) => item.category === category)
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  }



  
  return (
     <div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between">
      <Breadcrumbs className="bg-white flex-auto border flex justify-center items-center max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"> 
        <a href="/Home" className="text-black hover:text-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
        <a href="/Harticles" className="text-black hover:text-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Articulos</a>
        </Breadcrumbs>
        
        <Button data-ripple-light="true" data-dialog-target="dialog" onClick={toggleDialog} className= "text-white rounded-full p-2">
          <CiShoppingCart /> ({cart.length})
        </Button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg  shadow-lg w-full">
            <h2 className="text-2x1 font-bold mb-4 text-center">Carrito de compras</h2>
            <div className="overflow-y-auto h-64">
            {cart.map((item,index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <div className="flex-items-center">
                <img src={item.Image} alt="imagen" className="w-32 h-20 object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.price}</p>
              </div>
              <div>
                 <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
              </div>
              </div>
              
            ))}
            </div>
            <button onClick={toggleDialog} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Cerrar</button>
          </div>
        </div>
        )}
      </div>
      
      <div className=" flex flex-row text-black">
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900 border-2 border-gray-400 rounded-lg">
          <div className="mb-2 p-4"> 
           <Typography variant="h5" color="blue-gray" className="mr-auto font-normal">
            Articulos
           </Typography>
          </div>
        {/* Filtro por categoria */}
        <div className="flex flex-col lg:flex-row justify-between">
        {/* Filtro tipo */}
        <div>
          <p className="text-lg font-semibold">Tipo</p>
          <div className="flex justify-between flex-wrap">
            <Button onClick={() => setFoods(data)} className="bg-white text-black border-2 border-black hover:bg-black
             hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 
             px-4 py-2 text-sm font-semibold rounded-lg">Todo
            </Button>
            <Button onClick={() => filterType("Ropa")} className="bg-white text-black border-2 border-black hover:bg-black
              hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100
              px-4 py-2 text-sm font-semibold rounded-lg">Ropa
            </Button>
            <Button onClick={() => filterType("Zapatillas")} className="bg-white text-black border-2 border-black hover:bg-black
              hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100
              px-4 py-2 text-sm font-semibold rounded-lg">Zapatillas
            </Button>
            <Button onClick={() => filterType("Accesorios")} className="bg-white text-black border-2 border-black hover:bg-black
              hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100
              px-4 py-2 text-sm font-semibold rounded-lg">Accesorios
            </Button>
         </div>
        </div>
        </div>
        {/* Filtro por precio */}
        <div>
          <p className="font-semibold">Precio</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <Button onClick={() => setFoods(data)} className="bg-white text-black border-2 border-black hover:bg-black
              hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100
              px-4 py-2 text-sm font-semibold rounded-lg">Todo
            </Button>
            <Button onClick={() => filterPrice(35.00)} className="bg-white text-black border-2 border-black hover:bg-black
              hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100
              px-4 py-2 text-sm font-semibold rounded-lg">$35.00
            </Button>
        <Button onClick={() => filterPrice(40.00)} className="bg-white text-black border-2 border-black hover:bg-black
          hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100
          px-4 py-2 text-sm font-semibold rounded-lg">$40.00
        </Button>
          </div>
        </div>
        </Card>
      <div className="bg-gray-300 w-full grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 justify-stretch border-2 border-blue-gray-700 rounded-lg shadow-lg p-4 text-white "> 
        {foods.map((item) => (
          <Card key={item.id} className="w-full h-full">
            <CardHeader shadow={false} floated={false} className="h-52">
              <img src={item.Image} alt="imagen" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
              <Typography color="black" className="text-lg font-medium flex-grow">{item.title}</Typography>
              <Typography color="black" className="text-sm font-medium">{item.price}</Typography>
              </div>
              <Typography color="gray" variant="small" className="font-normal opacity-75">${item.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button 
              ripple={false}
              fullWidth={true}
              onClick={() => addToCart(item)}
              className="">Agregar al Carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      </div>
      </div>
    
  )
}

export default Harticles