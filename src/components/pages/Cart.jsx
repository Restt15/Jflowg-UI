/* eslint-disable react/prop-types */
import { Breadcrumbs } from "@mui/material";

import { Button } from "@material-tailwind/react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaTimes } from "react-icons/fa";



const Cart = ({cart, setCart }) => {

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const removeFromCart = (itemid) => {
    const updatedCart = cart.filter(item => item.id !== itemid);
    setCart(updatedCart);
  };
  
 
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
          <div>
            {cart.map((item, index) => (
              <Card key={index} className="mb-8"> 
                <CardBody>
                  <div className="flex items-center justify-between">
                    <div>
                
                      <Typography color="black" className="text-lg font-semibold">
                        {item.title}
                      </Typography>
                      <Typography color="gray" className="text-sm font-normal">
                        {item.description}
                      </Typography>
                      <Typography color="black" className="text-lg font-semibold">
                        ${item.price.toFixed(2)}
                      </Typography>
                    </div>
                    <Button color="red" size="sm" buttonType="filled" rounded={true} onClick={() => removeFromCart(item.id)}>
                      <FaTimes />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
            <div className="flex justify-between">
              <Button color="blue" buttonType="filled" size="regular" rounded={false}>
                Continuar Comprando
              </Button>
              <Typography color="black" className="text-lg font-semibold">Total: ${calculateTotal()}</Typography>
              <Button color="blue" buttonType="filled" size="regular" rounded={false}>
                Pagar
              </Button>
            </div>
          </div>
        )}
    </div>
    </div>

  );
};
export default Cart;
