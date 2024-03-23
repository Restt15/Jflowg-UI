import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Register = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-gray-100">
     <div className="flex flex-col">
     <div>
          <p className="font-semibold text-xl text-gray-900 border-b-2 border-black pb-2"></p>
        </div>
     </div>
     <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-start justify-between">
       <article className="flex flex-col w-full">
          <Card className="bg-white shadow-md rounded sm:px-6 lg:px- pt-6 pb-8 mb-4 border-2 border-blue-400" >
            <Typography
              color="black"
              className="text-lg text-center font-semibold"
            >
              Registro
            </Typography>
  
            <CardBody>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Required"),
                  email: Yup.string()
                    .email("Correo Invalido, Intente de nuevo")
                    .required("Required"),
                  password: Yup.string().required("Required"),
                  confirmPassword: Yup.string().oneOf(
                    [Yup.ref("password"), null],
                    "Contraseña no coincide, intente de nuevo"
                  ),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                <form>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Nombre
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Correo Electrónico
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Contraseña
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Confirmar Contraseña
                      </label>
                      <Field
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                </form>
              </Formik>
            </CardBody>
            <CardFooter>
            <Button
                      type="submit"
                      className="w-full bg-indigo-900 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Registrarse
                    </Button>
            </CardFooter>
          </Card>
       </article>

      
     </section>
    </div>
  )
}

export default Register