import { Breadcrumbs } from "@mui/material"
import { List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"  
import { ShoppingCartIcon } from "@heroicons/react/20/solid"
import { ChevronRightIcon, ChevronDownIcon} from "@heroicons/react/24/outline"
import React from "react"
import Producto1 from "../../assets/Toproducts/Snegro.png.jpeg"


import { Card, CardHeader, CardBody, CardFooter, Typography, Button} from "@material-tailwind/react"




const Harticles = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  };
  return (
    <div>
      <div className="container mx-auto px-9 h-24 grid grid-flow-col items-center text-black">
        <Breadcrumbs className="bg-white flex-auto borde flex justify-center items-center max-w-48"> 
          <a href="/Home" className="text-black hover:text-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</a>
          <a href="/Harticles" className="text-black hover:text-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Articulos</a>
        </Breadcrumbs>
        <div className="bg-black w-96"></div>
      </div>
      <div className=" flex flex-row text-black">
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900 border-2 border-gray-400 rounded-lg">
          <div className="mb-2 p-4"> 
           <Typography variant="h5" color="blue-gray" className="mr-auto font-normal">
            Articulos
           </Typography>
          </div>
          <List>
            <Accordion open={open === 1}
             icon={
               <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "transform rotate-180" : ""}`}
                  />
             }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <ShoppingCartIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blueGray" className="mr-auto font-normal">
                    Producto
                  </Typography>
                </AccordionHeader>
                 <AccordionBody className="py-1">
                   <List className="p-0">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Pantalones
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Camisas
                      </ListItem>
                    </List>
                 </AccordionBody>
                </ListItem>               
              </Accordion>
          </List>
        </Card>
        <div className="bg-gray-300 w-full grid grid-flow-col justify-stretch border-2 border-blue-gray-700 rounded-lg shadow-lg p-4 text-white ">
         <Card className="w-80 h-96">
          <CardHeader shadow={false} floated={false} className="h-48 bg-black"> 
          <img src={Producto1} alt="imagen" className="h-full w-full object-cover" />
          </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Sueter Negro Chica
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $35.00
              </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds 
         </Typography>
        </CardBody>
         <CardFooter className="pt-0">
           <Button ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Añadir al carrito</Button> 
         </CardFooter>
         </Card>

         <Card className="w-80 h-96">
         <CardHeader shadow={false} floated={false} className="h-48 bg-black"> 
          <img src={Producto1} alt="imagen" className="h-full w-full object-cover" />
          </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Sueter Negro Chica
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $35.00
              </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds 
         </Typography>
        </CardBody>
         <CardFooter className="pt-0">
           <Button ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Añadir al carrito</Button> 
         </CardFooter>
         </Card>
          <Card className="w-80 h-96">
          <CardHeader shadow={false} floated={false} className="h-48 bg-black"> 
          <img src={Producto1} alt="imagen" className="h-full w-full object-cover" />
          </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Sueter Negro Chica
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $35.00
              </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            lorem dsa jdsaj itsum djsdj 13md asd jad amdkasdkadkad kda dasd ada mds 
         </Typography>
        </CardBody>
         <CardFooter className="pt-0">
           <Button ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Añadir al carrito</Button> 
         </CardFooter>
          </Card>
        </div>
       
      </div> 
      </div>
      
    
  )
}

export default Harticles