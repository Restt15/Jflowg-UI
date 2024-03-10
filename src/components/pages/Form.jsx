/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  Input,
  Typography,
  Button,
  Textarea

} from "@material-tailwind/react";
import { Breadcrumbs } from "@mui/material";
import { Select, Option } from "@material-tailwind/react";




// eslint-disable-next-line react/prop-types
const Form = ({ calculateTotal, cart, calculateTotalItems } ) => {

  return (
    <div className="container mx-auto px-20">
      <div className="flex flex-col">
        <div className="flex-none w-80 h-24 mt-12">
          <Breadcrumbs>
            <a className="opacity-60">Ver Orden</a>
            <a className="text-black">Envio y Pago</a>
          </Breadcrumbs>
        </div>
        <div>
          <p className="font-semibold text-xl text-gray-900 border-b-2 border-black pb-2">
            Vista previa de la orden
          </p>
        </div>
      </div>
      <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-start justify-between">
        <div className="flex flex-col w-full sm:w-2/3">
          <article className="flex flex-col space-y-8">
            <Card className="">
              <CardBody>
                <Typography variant="h5" color="gray" className="mb-2">
                  Formulario de Comprador
                </Typography>
                <form>
                  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  <Input variant="standard" label="Nombre" size="lg" />
                  <Input variant="standard" label="Apellido" size="lg" />
                  <Input variant="standard" label="Email" size="lg" />
                  <Input variant="standard" label="Cédula / RUC-DV / Pasaporte" size="lg" />
                  <Input variant="standard" label="Telefono" size="lg" />
                  </div>
                  <hr className="my-6" />
                  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1">
                    <Textarea label="Notas del pedido (opcional)"></Textarea>
                  </div>
                </form>
              </CardBody>
            </Card>
            <Card className="">
              <CardBody>
                <Typography variant="h5" color="gray" className="mb-2">
                  Formulario de Comprador
                </Typography>
                <form className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  <Input
                    variant="standard"
                    label="Retirado por:"
                    size="lg"
                  />
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center gap-1 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-px h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Escribe el nombre completo y cedula de la persona que retire
                    su paquete.
                  </Typography>
                </form>
              </CardBody>
            </Card>
            <Card className="">
            <form className="flex w-full flex-col gap-6">
            <Select label="Método de envío" error> 
  <Option className="py-2 px-4 cursor-pointer hover:bg-gray-100">Zona #1 (Felipillo, 5 de mayo, Bethania, Bella vista, El cangrejo)</Option>
  <Option className="py-2 px-4 cursor-pointer hover:bg-gray-100">Zona #2 (24 de diciembre, Mega mall, las Mañanitas, Tocumen, San Isidro)</Option>
  <Option className="py-2 px-4 cursor-pointer hover:bg-gray-100">Zona #3  (Condado del rey, Costa del este, Campo Limber, Parque Lefevre, Rio Abajo, 12 de octubre)</Option>
  <Option className="py-2 px-4 cursor-pointer hover:bg-gray-100">Zona #4 (Albrook, Ancon, Don Bosco, LLano Bonito, San Antonio, Los Andes) </Option>
</Select>
<Input type="date" variant="standard" label="Fecha de entrega" size="lg" />
              </form>
            </Card>
          </article>
        </div>

        <div className="flex flex-wrap">
  <aside className="w-full md:w-2/3">
    {cart.map((item, index) => (
      <Card key={index} className="mb-1 border border-gray-200 rounded-md overflow-hidden shadow-lg relative">
      <div className="flex items-center p-4">
        <img src={item.Image} alt="imagen" className="w-24 h-24 object-contain mr-4" />
        <div className="flex flex-col flex-grow relative">
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
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-900 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center justify-center">
              {item.quantity}
            </div>
          </div>
        </div>
      </div>
    </Card>
    
    ))}
  </aside>
  
  <div className="w-full md:w-1/3 mt-12 sm:mt-0 sticky top-0 md:pl-4">
  <Card className=" w-full rounded-lg shadow-md p-4">
  <CardBody className="flex flex-col justify-end">
    <div className="mb-2">
      <Typography className="text-sm text-black self-start">
      Resumen del Pedido
      
      </Typography>
      <Typography className="text-sm self-end"> 
        Articulos ({calculateTotalItems()}) 
      </Typography>
      <span className="block h-0.5 bg-gray-200 w-full"></span>
    </div>
    <div className="mb-2">
      <Typography className="text-sm self-end">
        Entrega 
      </Typography>
      <span className="block h-0.5 bg-gray-200 w-full"></span>
    </div>
    <div className="mb-2">
      <Typography className="text-sm self-end">
        Subtotal: ${calculateTotal()}
      </Typography>
      <span className="block h-0.5 bg-gray-200 w-full"></span>
    </div>
    <div>
      <Typography variant="h5" color="blue-gray" className="text-sm self-end">
        Total ${calculateTotal()}
      </Typography>
      <span className="block h-0.5 bg-gray-200 w-full"></span>
    </div>
  </CardBody>
              <a href="/Harticles/Cart">
            <Button variant="text" color="red" size="sm" className="w-full"> Detalles de envio</Button>
            </a>
            <a>
            <Button variant="standard" color="green" size="sm" className="w-full">Continuar Pago</Button>
            </a>
</Card>

  </div>
</div>
      </section>
    </div>
  );
};



export default Form;
