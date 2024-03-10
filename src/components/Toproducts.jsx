import { Card } from "@mui/material";
import ToProduct1 from "../assets/Toproducts/Snegro.png.jpeg";
import ToProduct2 from "../assets/Toproducts/Snegro2.png.jpeg";
import ToProduct3 from "../assets/Toproducts/Snegro3.png.jpeg";
import { Button } from "@mui/material";
import { FaDollarSign } from "react-icons/fa";


import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const ToProductsData = [
  {
    id: 1,
    image: ToProduct1,
    title: "Producto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo.",
  },
  {
    id: 2,
    image: ToProduct2,
    title: "Producto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo.",
  },
  {
    id: 3,
    image: ToProduct3,
    title: "Producto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo.",
  },
];

const ToProducts = () => {
  return (
    <div className="bg-white shadow-lg  p-5">
        <hr className="my-6" />
      <div className="container mx-auto">
        {/* Titulo */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <div className="p-2 border-2 border-gray-300 bg-gray-50 rounded-md inline-block max-w-max">
            <p className="text-sm text-primary font-semibold px-3 py-1">
              Top Productos más Vendidos
            </p>
          </div>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*card section */}
            {ToProductsData.map((data) => (
              <div
                key={data.id}
                className="bg-gray-400 mx-auto rounded-lg overflow-hidden shadow-2xl scale-90"
              >
                {/* Added key prop */}
                <Card className="w-full max-w-[26rem] shadow-lg">
                  <CardHeader floated={false} color="blue-gray">
                    <img src={data.image} alt={data.title} />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <IconButton
                      size="sm"
                      color="red"
                      variant="text"
                      className="!absolute top-4 right-4 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </IconButton>
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {data.title}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">{data.description}</Typography>
                    <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                      <Tooltip content={`$${data.price} per night`}>
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                          <FaDollarSign className="h-5 w-5" />
                        </span>
                      </Tooltip>
                      {/* Add more icons and tooltips for additional features */}
                    </div>
                    <CardFooter className="pt-3">
                      <Button size="lg" fullWidth={true}>
                        Ordenar
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToProducts;
