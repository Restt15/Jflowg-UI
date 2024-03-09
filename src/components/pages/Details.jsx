/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import { Breadcrumbs, Typography } from "@mui/material";
import Producto1 from "../../assets/Toproducts/Snegro.png.jpeg";
import { Button } from "@material-tailwind/react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Details = ({ setCart, addToCart, increaseQuantity, decreaseQuantity,products, cart }) => {
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  // Obtener el ID del producto de los parámetros de la URL
  const { id } = useParams();

  // Buscar el producto correspondiente por su ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col">
        <div className="flex-none w-80 h-24 mt-12">
          <Breadcrumbs>
            <a className="opacity-60">Inicio</a>
            <a className="opacity-60">Articulos</a>
            <a className="text-black">Detalles</a>
          </Breadcrumbs>
        </div>
        <div>
          <p className="font-semibold text-xl text-gray-900 border-b-2 border-black pb-2"></p>
        </div>
        <section className="px-4 sm:px-6 lg:px-16 py-12 flex flex-col sm:flex-row items-start justify-between">
      <img
        className="h-96 w-72 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src={Producto1} // Asegúrate de tener la propiedad 'image' en tu objeto 'product'
        alt={product.title}
      />
      <aside className="sm:w-1/2 mt-10 p-6 rounded-lg flex-1">
        <Typography variant="h2" className="text-black text-3xl font-bold mb-4">
          {product.title}
        </Typography>

        <Typography variant="h5" className="text-gray-800 mb-6">
          {product.description}
        </Typography>

        <div className="flex items-center mb-6">
          <Typography variant="h3" className="text-blue-900 text-lg font-bold mr-4">
            ${product.price}
          </Typography>
        </div>
        <div>
          <div className="flex w-max gap-4">
            <div>
              <Button
                onClick={() => decreaseQuantity(product)}
                variant="text"
                className="p-1 text-blue-500 hover:text-blue-700"
              >
                <FaMinus />
              </Button>
              <span className="mx-2 text-lg font-bold text-gray-900">
                {product.quantity}
              </span>
              <Button
                onClick={() => increaseQuantity(product)}
                variant="text"
                className="p-1 text-blue-500 hover:text-blue-700"
              >
                <FaPlus />
              </Button>
            </div>
            <div className="flex flex-row gap-2">
              <div>
                <Button
                  className="bg-blue-900 text-white"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al Carrito
                </Button>
              </div>
              <div>
                <a href="/Harticles/Form">
                  <Button color="green" fullWidth>
                    Comprar
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
      </div>
    </div>
  );
};

export default Details;
