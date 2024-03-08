import { Breadcrumbs } from "@mui/material"
import React from "react"
import { useState } from 'react';
import { Card, CardBody, Button, CardFooter,} from "@material-tailwind/react"
import products from "../../assets/data/products"


// eslint-disable-next-line react/prop-types
const Harticles = ({ addToCart, }) => {
    const [alertMessage, setAlertMessage] = useState('');
    const [LastAddedItem, setLastAddedItem] = useState(null)
    const [foods, setFoods] = React.useState(products);
   

  const handleAddToCart = (item) => {
    addToCart(item)
    setLastAddedItem(item);
    setAlertMessage(`${item.title} fue agregado al carrito`);
    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  };
    // filtro para categoria  
  const filterType = (category) => {
    setFoods(
      products.filter((item) => item.category === category)
    );
  };

  const filterPrice = (price) => {
    setFoods(
      products.filter((item) => {
        return item.price === price;
      })
    );
  }

  


  
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
  <div className="flex flex-col">
    <div className="flex-none w-full mt-8">
      <Breadcrumbs className="text-sm text-gray-500">
        <a className="text-black">Ver Orden</a>
        <a className="text-black">Envío</a>
        <a className="text-black">Pago</a>
      </Breadcrumbs>
    </div>  
  </div>
  <section className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start justify-between">
    <div className="flex flex-col w-full sm:w-2/3">
      <div className="w-full max-w-md p-4 shadow-lg border rounded-lg bg-white mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Artículos</h2>
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Tipo</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFoods(products)} className="button-filter">Todo</button>
            <button onClick={() => filterType("Ropa")} className="button-filter">Ropa</button>
            <button onClick={() => filterType("Zapatillas")} className="button-filter">Zapatillas</button>
            <button onClick={() => filterType("Accesorios")} className="button-filter">Accesorios</button>
          </div>
        </div>
        <div>
          <p className="text-gray-700 mb-2">Precio</p>
          <div className="flex gap-2">
            <button onClick={() => setFoods(products)} className="button-filter">Todo</button>
            <button onClick={() => filterPrice(35.00)} className="button-filter">$35.00</button>
            <button onClick={() => filterPrice(40.00)} className="button-filter">$40.00</button>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
  {foods.map((item) => (
    <div key={item.id} className="block">
      <Card className="bg-white rounded-lg overflow-hidden shadow-md">
        <a href={`/Harticles/Details/${item.id}`}>
          <img src={item.Image} alt={item.title} className="w-full h-64 object-cover object-center" />
          <CardBody className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-gray-600">${item.price}</p>
          </CardBody>
        </a>
        <CardFooter>
          <Button
            onClick={(e) => {
              e.stopPropagation(); // Detiene la propagación del evento
              handleAddToCart(item);
            }}
            className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out w-full"
          >
            Agregar al Carrito
          </Button>
        </CardFooter>
      </Card>
    </div>
  ))}
</div>

      {/* Mensaje de Alerta */ }
      {alertMessage && (
      <div className="fixed top-4 right-4 p-4 bg-white text-black border border-gray-300 rounded-lg shadow-md transition-transform duration-500 transform translate-y-0 max-w-sm">
        <div className="flex items-center">
          <img src={LastAddedItem.Image} alt="imagen" className="w-24 h-24 object-cover mr-4" />
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2">{alertMessage}</h3>
            <p className="text-sm">{LastAddedItem.description}</p>
            <p className="text-sm">${LastAddedItem.price}</p>
          </div>
        </div>
        <a href="/Harticles/Cart">
          <Button className="mt-4 w-full">Ver Carrito</Button>
        </a>
      </div>
    )}
  </section>
</div>
  )}
export default Harticles