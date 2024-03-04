import { Breadcrumbs } from "@mui/material"
import React from "react"
import Producto1 from "../../assets/Toproducts/Snegro.png.jpeg"
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button,} from "@material-tailwind/react"



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
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds dasddas dad sd asda dad asda das dasd asd axca xmcdasd",
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

// eslint-disable-next-line react/prop-types
const Harticles = ({ addToCart, }) => {
    const [alertMessage, setAlertMessage] = useState('');
    const [LastAddedItem, setLastAddedItem] = useState(null)
    const [foods, setFoods] = React.useState(data);
   

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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-24  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 items-center justify-between">
 <div className="flex flex-col">
        <div className="flex-none w-80 h-24 mt-12">
          <Breadcrumbs>
            <a className="text-black">Ver Orden</a>
            <a className="opacity-60">Envio</a>
            <a className="opacity-60">Pago</a>
          </Breadcrumbs>
        </div>  
      </div>
  <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-row sm:flex-row items-start justify-between">
    <div className="flex flex-col w-full sm:w-2/3">
      <article className="w-64">
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
          <Button onClick={() => setFoods(data)} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 px-4 py-2 text-sm font-semibold rounded-lg">Todo</Button>
          <Button onClick={() => filterType("Ropa")} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 px-4 py-2 text-sm font-semibold rounded-lg">Ropa</Button>
          <Button onClick={() => filterType("Zapatillas")} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 px-4 py-2 text-sm font-semibold rounded-lg">Zapatillas</Button>
          <Button onClick={() => filterType("Accesorios")} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 px-4 py-2 text-sm font-semibold rounded-lg">Accesorios</Button>
        </div>
      </div>
    </div>
    {/* Filtro por precio */}
    <div>
      <p className="font-semibold">Precio</p>
      <div className="flex justify-between max-w-[390px] w-full">
        <Button onClick={() => setFoods(data)} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 px-4 py-2 text-sm font-semibold rounded-lg">Todo</Button>
        <Button onClick={() => filterPrice(35.00)} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 px-4 py-2 text-sm font-semibold rounded-lg">$35.00</Button>
        <Button onClick={() => filterPrice(40.00)} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out shadow-none focus:outline-none active:scale-100 px-4 py-2 text-sm font-semibold rounded-lg">$40.00</Button>
      </div>
    </div>
  </Card>
      </article>
    </div>
    <div className="bg-gray-200 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 justify-stretch border-2 border-blue-gray-700 rounded-lg shadow-lg text-white"> 
    {foods.map((item) => (
      <Card key={item.id} className="w-full h-full">
        <CardHeader shadow={false} floated={false} className="h-52">
          <img src={item.Image} alt="imagen" className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="black" className="text-lg font-medium flex-grow">{item.title}</Typography>
            <Typography color="black" className="text-sm font-medium">$ {item.price}</Typography>
          </div>
          <Typography color="gray" variant="small" className="font-normal opacity-75">{item.description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            color="blue"
            buttonType="filled"
            size="regular"
            block={false}
            iconOnly={false}
            ripple="light"
            className="py-2 bg-black w-full"
            onClick={() => handleAddToCart(item)}>Agregar al Carrito</Button>
        </CardFooter>
      </Card>
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
            <p className="text-sm"> ${LastAddedItem.price}</p>
          </div>
        </div>
        <a href="/Harticles/Cart">
          <Button className="mt-4 w-full">Ver Carrito</Button>
        </a>
      </div>
    )}
  </section>
</div>

 
  )
}

export default Harticles