import {
  Card,
  CardBody,
  Input,
  Typography,
  Checkbox,
  ListItem,
  ListItemPrefix,
  Button,

} from "@material-tailwind/react";
import { Breadcrumbs } from "@mui/material";
import { useState } from "react";


const Form = () => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0)
   const [showForm, setShowForm] = useState(false)



  const handleCheckboxChange = (isChecked, price) => {
    if (isChecked) {
      setTotal(total + price);
    } else {
      setTotal(total - price);
    }
    setShowForm(isChecked)
  }

  return (
    <div className="container mx-auto px-20">
      <div className="flex flex-col">
        <div className="flex-none w-80 h-24 mt-12">
          <Breadcrumbs>
            <a className="opacity-60">Ver Orden</a>
            <a className="text-black">Envio</a>
            <a className="opacity-60">Pago</a>
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
          <article className="flex flex-col space-y-6">
            <Card className="bg-gray-200">
              <CardBody>
                <Typography variant="h5" color="gray" className="mb-2">
                  Formulario de Comprador
                </Typography>
                <form className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  <Input variant="standard" label="Nombre" size="lg" />
                  <Input variant="standard" label="Email" size="lg" />
                  <Input variant="standard" label="Telefono" size="lg" />
                  <Input variant="standard" label="Ciudad" size="lg" />
                  
                </form>
              </CardBody>
            </Card>
            <Card className="bg-gray-200">
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
            <Card>
            <ListItem className="p-0">
        <label
          htmlFor="vertical-list-react"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              id="vertical-list-react"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
              onChange={(isChecked) => handleCheckboxChange(isChecked, 3.50)}
            />
          </ListItemPrefix>
          <Typography color="blue-gray" className="font-medium">
            React.js
          </Typography>
        </label>
      </ListItem>
      <ListItem className="p-0">
        <label
          htmlFor="vertical-list-vue"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              id="vertical-list-vue"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
              onChange={(isChecked) => handleCheckboxChange(isChecked, 5.00)}
            />
          </ListItemPrefix>
          <Typography color="blue-gray" className="font-medium">
            Vue.js
          </Typography>
        </label>
      </ListItem>
      <ListItem className="p-0">
        <label
          htmlFor="vertical-list-svelte"
          className="flex w-full cursor-pointer items-center px-3 py-2"
        >
          <ListItemPrefix className="mr-3">
            <Checkbox
              id="vertical-list-svelte"
              ripple={false}
              className="hover:before:opacity-0"
              containerProps={{
                className: "p-0",
              }}
              onChange={(isChecked) => handleCheckboxChange(isChecked, 4.00)}
            />
          </ListItemPrefix>
          <Typography color="blue-gray" className="font-medium">
            Svelte.js
          </Typography>
        </label>
      </ListItem>
     
            </Card>
            {showForm && (
        <Card className="bg-gray-200">
          <CardBody>
            <Typography variant="h5" color="gray" className="mb-2">
              Formulario de Comprador
            </Typography>
            <form className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <Input variant="standard" label="Direccion" size="lg" />
              <Input variant="standard" label="Apartamento" size="lg" />
             
              <p>Total fee: ${total.toFixed(2)}</p>
            </form>
          </CardBody>
        </Card>
      )}
          </article>
        </div>
        <div className="w-full sm:w-1/3 mt-12 sm:mt-0 sticky top-0">
              <Card className="h-40 w-80  ml-auto">
                <CardBody className="flex flex-col justify-end">
                  <Typography className="text-sm self-end">
                    Subtotal: ${subtotal}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 text-sm self-end"
                  >
                    Total ${total}
                  </Typography>
                  <a href="/Harticles/Form">
                    <Button size="sm" fullWidth>
                      Filled
                    </Button>
                  </a>
                  <Typography className="text-sm self-center"> o </Typography>
                  <a href="/Harticles">
                    <Button size="sm" fullWidth variant="text">
                      {" "}
                      Continuar Comprando
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
      </section>
    </div>
  );
};

export default Form;
