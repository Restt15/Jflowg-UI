import { Breadcrumbs } from "@mui/material"
import React from "react"
import Producto1 from "../../assets/Toproducts/Snegro.png.jpeg"


import { Card, CardHeader, CardBody, CardFooter, Typography, Button} from "@material-tailwind/react"

const data = [
  {
    id: 1,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 2,
    title: "Camisas",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 3,
    title: "Sueter",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 4,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 5,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 6,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 7,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 8,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 9,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 10,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 11,
    title: "Pantalones",
    category: "Ropa",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 12,
    title: "Pantalones",
    category: "Zapatillas",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 35.00
  },
  {
    id: 13,
    title: "Pantalones",
    category: "Zapatillas",
    Image: Producto1,
    description: "lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds",
    price: 40.00
  },
]


const Harticles = () => {
    const [foods, setFoods] = React.useState(data);

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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
      <Breadcrumbs className="bg-white flex-auto border flex justify-center items-center max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"> 
        <a href="/Home" className="text-black hover:text-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
        <a href="/Harticles" className="text-black hover:text-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Articulos</a>
      </Breadcrumbs>
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
      <div className="bg-gray-300 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-stretch border-2 border-blue-gray-700 rounded-lg shadow-lg p-4 text-white ">
        {foods.map((food) => (
          <Card key={food.id} className="w-full h-full">
            <CardHeader shadow={false} floated={false} className="h-52 bg-black"> 
              <img src={food.image} alt={food.name} className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex flex-col sm:flex-row items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {food.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  ${food.price}
                </Typography>
              </div>
              <Typography variant="small" color="gray" className="font-normal opacity-75">
                {food.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Añadir al carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      </div> 
      </div>
      
    
  )
}

export default Harticles