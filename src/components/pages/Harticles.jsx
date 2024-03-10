import { Breadcrumbs } from "@mui/material";
import { Select, Option } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import products from "../../assets/data/products";

// eslint-disable-next-line react/prop-types
const Harticles = ({ addToCart }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [LastAddedItem, setLastAddedItem] = useState(null);
  const [foods, setFoods] = React.useState(products);
  const [value, setValue] = React.useState("react");

  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const handleAddToCart = (item) => {
    addToCart(item);
    setLastAddedItem(item);
    setAlertMessage(`${item.title} fue agregado al carrito`);
    setTimeout(() => {
      setAlertMessage("");
    }, 5000);
  };
  // filtro para categoria
  const filterType = (category) => {
    setFoods(products.filter((item) => item.category === category));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col">
        <div className="flex-none w-full mt-8">
          <Breadcrumbs className="text-sm text-gray-500">
            <a className="text-black">Inicio</a>
            <a className="text-black">Articulos</a>
          </Breadcrumbs>
        </div>
        <div>
          <p className="font-semibold text-xl text-gray-900 border-b-2 border-black pb-12"></p>
        </div>
      </div>
      <section className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start justify-between">
        <div className="flex flex-col w-full sm:w-2/3">
          <div className="w-full max-w-md p-4 shadow-lg border rounded-lg bg-white mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Filtrar por Precio
            </h2>

            <div className="flex gap-2">
              <Select className="z-50"
                label="Ordenar por"
                value={value}
                onChange={(val) => {
                  setValue(val);

                  let sortedProducts;

                  switch (val) {
                    case "Popularidad":
                      sortedProducts = products.sort(
                        (a, b) => b.quantity - a.quantity
                      );
                      break;
                    case "mayorAMenor":
                      sortedProducts = products.sort(
                        (a, b) => b.price - a.price
                      );
                      break;
                    case "menorAMayor":
                      sortedProducts = products.sort(
                        (a, b) => a.price - b.price
                      );
                      break;
                    case "ultimos":
                      sortedProducts = products.sort((a, b) => b.id - a.id);
                      break;
                    default:
                      sortedProducts = products;
                      break;
                  }

                  setFoods(sortedProducts);
                }}
              >
                <Option value="Popularidad">Ordenar por popularidad</Option>
                <Option value="mayorAMenor">Ordenar por Mayor a Menor</Option>
                <Option value="menorAMayor">Ordenar por Menor a Mayor</Option>
                <Option value="ultimos">Ordenar por los últimos</Option>
              </Select>
            </div>

            <hr className="my-6" />
            <div className="mb-4">
              <div className="flex flex-col gap-1 place-items-start">
                <Button
                  fullWidth={true}
                  onClick={() => setFoods(products)}
                  className="text-start"
                  variant="text"
                >
                  <div className="flex items-center justify-between w-full">
                    <Typography variant="h6" className="text-sm">
                      Todo
                    </Typography>
                  </div>
                </Button>
                <Button
                  fullWidth={true}
                  onClick={() => filterType("Ropa")}
                  className="text-start"
                  variant="text"
                >
                  <div className="flex items-center justify-between w-full">
                    <Typography variant="h6" className="text-sm">
                      Ropa
                    </Typography>
                    <span className="inline-flex items-center justify-center bg-black text-white font-semibold text-sm px-3 py-1 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
                      {categoryCounts["Ropa"] || 0}
                    </span>
                  </div>
                </Button>
                <Button
                  fullWidth={true}
                  onClick={() => filterType("Zapatillas")}
                  variant="text"
                  className="text-start"
                >
                  <div className="flex items-center justify-between w-full">
                    <Typography variant="h6" className="text-sm">
                      Zapatillas
                    </Typography>
                    <span className="inline-flex items-center justify-center bg-black text-white font-semibold text-sm px-3 py-1 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
                      {categoryCounts["Zapatillas"] || 0}
                    </span>
                  </div>
                </Button>
                <Button
                  fullWidth={true}
                  onClick={() => filterType("Accesorios")}
                  variant="text"
                  className="text-start"
                >
                  <div className="flex items-center justify-between w-full">
                    <Typography variant="h6" className="text-sm">
                      Accesorios
                    </Typography>
                    <span className="inline-flex items-center justify-center bg-black text-white font-semibold text-sm px-3 py-1 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white">
                      {categoryCounts["Accesorios"] || 0}
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {foods.map((item) => (
            <div key={item.id} className="block">
              <Card className=" rounded-lg overflow-hidden shadow-md border-2 border-white border-opacity-25 hover:border-opacity-50 transition duration-300 ease-in-out transform hover:scale-105">
                <a href={`/Harticles/Details/${item.id}`}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.Image}
                      alt={item.title}
                      className="w-full h-64 object-cover object-center neon-border transform transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white text-xl font-bold">
                        Ver Detalles
                      </span>
                    </div>
                  </div>
                  <CardBody className="p-4">
                    <Typography className="text-lg font-semibold text-black mb-2">
                      {item.title}
                    </Typography>
                    <Typography className="text-gray-800 mb-2">
                      {item.description}
                    </Typography>
                    <Typography className="text-blue-900">
                      ${item.price}
                    </Typography>
                  </CardBody>
                </a>
                <CardFooter>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className=""
                  >
                    Agregar al Carrito
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Mensaje de Alerta */}
        {alertMessage && (
          <div className="fixed top-4 right-4 p-4 bg-white text-black border border-gray-300 rounded-lg shadow-md transition-transform duration-500 transform translate-y-0 max-w-sm">
            <div className="flex items-center">
              <img
                src={LastAddedItem.Image}
                alt="imagen"
                className="w-24 h-24 object-cover mr-4"
              />
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
  );
};
export default Harticles;
