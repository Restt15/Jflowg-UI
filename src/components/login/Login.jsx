import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col">
        <div>
          <p className="font-semibold text-xl text-gray-900 border-b-2 border-black pb-2"></p>
        </div>
        <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-start justify-between">
          <div className="flex flex-col w-full sm:w-2/3">
            <article>
              <Card className="bg-white shadow-md rounded sm:px-6 lg:px- pt-6 pb-8 mb-4">
                <Typography
                  color="black"
                  className="text-lg text-center font-semibold"
                >
                  Acceder
                </Typography>

                <CardBody>
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                      password: Yup.string().required("Required"),
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
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Correo Electrónico
                          </label>
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className="shadow appearance-none border border- rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
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
                            name="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div>
                          <Button
                            type="submit"
                            className="w-full bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            Iniciar Sesión
                          </Button>
                        </div>
                      </div>
                    </form>
                  </Formik>
                </CardBody>
              </Card>
            </article>
          </div>
          <aside className="flex flex-col sm:m-1/3 sm:mt-0 sm:ml-8 ">
            <Card className="bg-white shadow-md rounded sm:px-6 lg:px-4 pt-7 pb-2 mb-4">
              <Typography
                color="black"
                className="text-lg text-center font-semibold"
              >
                ¿No tienes una cuenta?
              </Typography>
              <CardBody>
                <p className="text-center text-gray-700">
                  Crea una cuenta para acceder a todas nuestras características.
                </p>
              </CardBody>
              <CardFooter>
                <div>
                  <Link to="/Register">
                  <Button
                    fullWidth
                    className="bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Regístrate
                  </Button>
                </Link>
                </div>
              </CardFooter>
            </Card>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Login;
