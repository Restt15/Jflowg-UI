/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@mui/material";

import { Button } from "@material-tailwind/react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";



const Cart = ({cart, calculateTotal, increaseQuantity, decreaseQuantity, removeItem}) => {

 
  return (
    <div className="container mx-auto px-20">
    <div className="flex flex-col">
      <div className="flex-none w-80 h-24 mt-12">
        <Breadcrumbs>
          <a className="text-black">Ver Orden</a>
          <a className="opacity-60">Envio</a>
          <a className="opacity-60">Pago</a>
        </Breadcrumbs>
      </div>
      <div>
        <p className="font-semibold text-xl text-gray-900 border-b-2 border-black pb-2">
          Vista previa de la orden
        </p>
      </div>
    </div>
    <div>
      {cart.length === 0 ? (
        <div className="text-center mt-8 p-4 bg-gray-100 border border-gray-200 rounded-md text-black">
          El carrito está vacío 
        </div>
      ) : (
        <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-start justify-between">
          <div className="flex flex-col w-full sm:w-2/3">
            <article>
              {cart.map((item, index) => (
                <Card key={index} className="mb-8 border border-gray-200 rounded-md overflow-hidden shadow-lg">
                  <div className="flex items-center p-4">
                    <img src={item.Image} alt="imagen" className="w-24 h-24 object-contain mr-4" />
                    <div className="flex flex-col flex-grow">
                      <Typography color="black" className="text-lg font-semibold">
                        {item.title}
                      </Typography>
                      <Typography color="gray" className="text-sm font-normal mt-1">
                        {item.description}
                      </Typography>
                      <div className="flex items-center mt-2">
                        <Typography color="black" className="text-lg font-semibold mr-2">
                          ${item.price.toFixed(2)}
                        </Typography>
                        <Button onClick={() => decreaseQuantity(index)} variant="text" className="p-1 text-blue-500 hover:text-blue-700">
                          <FaMinus />
                        </Button>
                        <span className="mx-2 text-lg font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <Button onClick={() => increaseQuantity(index)} variant="text" className="p-1 text-blue-500 hover:text-blue-700">
                          <FaPlus />
                        </Button>
                        <Button onClick={() => removeItem(index)} variant="text" className="ml-auto text-red-500 p-1 hover:text-red-700">
                          <FaTimes />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </article>
          </div>
          <aside className="w-full sm:w-1/3 mt-10 sm:mt-0 sticky top-0">
            <Card className="h-40 w-80 ml-auto">
              <CardBody className="flex flex-col justify-end">
                <Typography className="text-sm self-end">
                  Total: ${calculateTotal()}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-sm self-end">
                  Subtotal: ${calculateTotal()}
                </Typography>
                <a href="/Harticles/Form">
                  <Button size="sm" fullWidth>Filled</Button>
                </a>
                <Typography className="text-sm self-center"> o </Typography>
                <a href="/Harticles">
                  <Button size="sm" fullWidth variant="text">
                    Continuar comprando
                  </Button>
                </a>
              </CardBody>
            </Card>
          </aside>
        </section>
      )}
    </div>
  </div>
  

  );
};
export default Cart;
