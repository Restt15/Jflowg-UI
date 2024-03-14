/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  Input,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Textarea,
  Checkbox,
  Button,
  
 
} from "@material-tailwind/react";
import { Breadcrumbs } from "@mui/material";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import yapi from "../../assets/website/yappy-logo-5D338E6466-seeklogo.com.png";
import ach from "../../assets/website/ach_processing.png"
import * as Yup from 'yup';




// eslint-disable-next-line react/prop-types
const Formulario = ({ calculateTotal, cart, calculateTotalItems } ) => {

  

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    apellido: Yup.string().required('El apellido es requerido'),
    cedula: Yup.string().required('La cedula es requerido'),
    telefono: Yup.string().required('El telefono es requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    // Añade otras validaciones según sea necesario
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col">
      <div className="flex-none w-full sm:w-80 h-24 mt-12">
        <Breadcrumbs>
          <a className="opacity-60">Ver Orden</a>
          <a className="text-black">Envio y Pago</a>
        </Breadcrumbs>
      </div>
      <div>
        <p className="font-semibold text-xl text-gray-900 border-b-2 border-black pb-2">
          Detalles de Facturación
        </p>
      </div>
    </div>
    <form>
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-start justify-between">
      <div className="flex flex-col w-full sm:w-2/3">
        <article className="flex flex-col space-y-8">
          <Card className="">
            <CardBody>
              <Typography variant="h5" color="gray" className="mb-2">
                Formulario de Comprador
              </Typography>
              <Formik
        initialValues={{
          Nombre: '',
          Apellido: '',
          Email: '',
          Cedula: '',
          Telefono: '',
          RetiroPor: '',
          MetodoEnvio: ''
          
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
         await new Promise((r) => setTimeout(r, 500));
         alert(JSON.stringify(values, null, 2))
        }}
      >
      {({ values }) => (
              <div>
               <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                 <div className="flex flex-col">
                   <Field
                     id="Nombre"
                     variant="standard"
                     name="nombre"
                     type="text"
                     className=""
                     as={Input}
                     label="Nombre"
                     size="lg"
                   />
                   <ErrorMessage name="nombre" component="div" className="error" />
                 </div>
                 <div className="flex flex-col">
                   <Field
                     id="Apellido"
                     variant="standard"
                     name="Apellido"
                     type="text"
                     className=""
                     as={Input}
                     label="Apellido"
                     size="lg"
                   />
                   <ErrorMessage name="Apellido" component="div" className="error" />
                 </div>
                 <div className="flex flex-col">
                   <Field
                     id="Email"
                     variant="standard"
                     name="Email"
                     type="email"
                     className=""
                     as={Input}
                     label="Email"
                     size="lg"
                   />
                   <ErrorMessage name="Email" component="div" className="error" />
                 </div>
                 <div className="flex flex-col">
                   <Field
                     id="Cedula"
                     variant="standard"
                     name="Cedula"
                     type="text"
                     className=""
                     as={Input}
                     label="Cedula"
                     size="lg"
                   />
                   <ErrorMessage name="Cedula" component="div" className="error" />
                 </div>
                 <div className="flex flex-col">
                   <Field
                     id="Telefono"
                     variant="standard"
                     name="Telefono"
                     type="type"
                     className=""
                     as={Input}
                     label="Telefono"
                     size="lg"
                   />
                   <ErrorMessage name="Telefono" component="div" className="error" />
                 </div>
               </div>
               <hr className="my-6" />
               <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1">
                 <Field
                   label="Notas del pedido (opcional)"
                   as={Textarea}
                   id="NotasPedido"
                   name="NotasPedido"
                   type="text"
                   size="lg"
                 />
                 <hr className="my-6" />
                <Typography variant="h5" color="gray" className="mb-2">
                  Detalles de Facturación
                </Typography>
                <div className="flex flex-col">
  <Field
    id="RetiroPor"
    variant="standard"
    name="Retirado por"
    type="text" 
    className=""
    as={Input}
    label="Retirado por:"
    size="lg"
  />
  <ErrorMessage name="Retirado por" component="div" className="error" />
</div>
<hr className="my-10" />
<div className="flex flex-col">
        <Typography variant="h5" color="gray" className="mb-2">
          Método de Envío
        </Typography>
        <div>
        <Field
            type="radio"
            name="metodoEnvio"
            value="zona1"
            id="zona1"
            className="mr-2"
          
          />
          
          <label htmlFor="zona1">Zona #1 (Felipillo, 5 de mayo, Bethania, Bella vista, El cangrejo)</label>
        </div>
        <div>
          <Field type="radio" name="metodoEnvio" value="zona2" id="zona2" className="mr-2" />
          <label htmlFor="zona2">Zona #2 (24 de diciembre, Mega mall, las Mañanitas, Tocumen, San Isidro)</label>
        </div>
        <div>
          <Field type="radio" name="metodoEnvio" value="zona3" id="zona3" className="mr-2" />
          <label htmlFor="zona3">Zona #3 (Condado del rey, Costa del este, Campo Limber, Parque Lefevre, Rio Abajo, 12 de octubre)</label>
        </div>
        <div>
          <Field type="radio" name="metodoEnvio" value="zona4" id="zona4" className="mr-2" />
          <label htmlFor="zona4">Zona #4 (Albrook, Ancon, Don Bosco, LLano Bonito, San Antonio, Los Andes)</label>
        </div>
        <ErrorMessage name="metodoEnvio" component="div" className="error" />
      </div>
      <hr className="my-10" />
      <Field
  id="fecha"
  name="Fecha"
  type="date"
  className=""
  as={Input}
  variant="standard"
  label="Fecha de entrega"
  size="lg"
/>
<ErrorMessage name="Fecha" component="div" className="error" />
               </div>
               </div>
      )}
              </Formik>
            </CardBody>
          </Card>
        </article>
      </div>
      <aside className="flex flex-col w-full sm:w-1/3 mt-4 sm:mt-0">
      {cart.length === 0 ? (
         <div className="bg-gray-100 border border-gray-300 p-4 rounded-md text-center">
         <p className="text-gray-500">
           No hay productos en el carrito, agrega un producto para la compra.
         </p>
       </div>
      ) : (
        <Card className="w-full rounded-lg border-2 border-y-indigo-200 shadow-md p-4 ">
  <CardBody className="flex flex-col justify-end">
    <Typography variant="h4" className="text-center text-black">
      Resumen de la orden
    </Typography>
    <hr className="my-6" />

    {cart.map((item, index) => (
      <div key={index} className="mb-4 w-full rounded-md overflow-hidden shadow-lg relative border-2 border-y-indigo-500">
        <div className="flex items-center p-3">
          <img src={item.Image} alt="imagen" className="w-24 h-24 object-contain mr-4" />
          <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between">
              <div>
                <Typography color="black" className="text-lg font-semibold">
                  {item.title}
                </Typography>
                <Typography color="gray" className="text-sm font-normal mt-1">
                  {item.description}
                </Typography>
              </div>
              <Typography color="black" className="text-lg font-semibold mr-2">
                ${item.price.toFixed(2)}
              </Typography>
            </div>
            <div className="flex items-center mt-2">
              <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2 bg-indigo-900 text-white px-2 py-4 rounded-full text-sm font-bold flex items-center justify-center">
                {item.quantity}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}

    <hr className="my-6" />

    <div className="flex justify-between items-center">
      <Typography variant="h6" color="blue-gray" className="text-x text-black">
        Articulos 
      </Typography>
      <Typography variant="h6" color="blue-gray" className="text-x text-black">
        ({calculateTotalItems()})
      </Typography>
    </div>

    <hr className="my-6" />

    <div className="flex justify-between items-center">
      <Typography variant="h6" className="text-sm self-end text-black">
        Entrega
      </Typography>
      <Typography className="text-sm">
       
      </Typography>
    </div>

    <hr className="my-6" />

    <div className="flex justify-between items-center">
      <Typography variant="h6" color="blue-gray" className="text-x text-black">
        Subtotal
      </Typography>
      <Typography variant="h6" color="blue-gray" className="text-x text-black">
        ${calculateTotal()}
      </Typography>
    </div>

    <hr className="my-6" />

    <div className="flex justify-between items-center">
      <Typography variant="h6" color="blue-gray" className="text-x text-black">
        Total
      </Typography>
      <Typography variant="h6" color="blue-gray" className="text-x text-black">
        ${calculateTotal()}
      </Typography>
    </div>
  </CardBody>
</Card>

      )}
    
    <Card className="w-full rounded-lg mt-4 shadow-md p-auto border-2 border-y-indigo-200">
    <CardBody className="flex flex-col justify-end">
      <Typography variant="h4" className="text-black">
           Metodo de Pago 
      </Typography>
      <List>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="vertical-list"
                id="vertical-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
              
            </ListItemPrefix>
            <Typography
              color="blue-gray"
              className="font-medium text-black"
            >
              Efectivo
            </Typography>
            <img
              src={ach}
              alt="Yapi Payment"
              className="w-5 h-5 ml-3"
            />
            
          </label>
          
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="vertical-list"
                id="vertical-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography
              color="blue-gray"
              className="font-medium text-black"
            >
              Yappy
            </Typography>
            <img
              src={yapi}
              alt="Yapi Payment"
              className="w-5 h-5 ml-3"
            />
          </label>
        </ListItem>
      </List>
      <hr className="my-4"/>
        Tus datos personales estan protegidos, se utilizaran para procesar tu 
        pedido y mejorar tu experiencia.
      <hr className="my-4"/>
    <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Link to="/Payrecieve">
          <Button className="mt-6 bg-indigo-900" type="submit" fullWidth>
          Realizar el pedido
        </Button>
        </Link>
    </CardBody>
    </Card>
      </aside>
    </section>
    </form>
  </div>
  );
};



export default Formulario;
