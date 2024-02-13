import { Stack } from "@mui/material";
import ToProduct1 from "../assets/Toproducts/Snegro.png.jpeg"
import ToProduct2 from "../assets/Toproducts/Snegro2.png.jpeg"
import ToProduct3 from "../assets/Toproducts/Snegro3.png.jpeg"
import { Button } from "@mui/material"
 

const ToProductsData = [
  {
    id: 1,
    image: ToProduct1,
    title: "Producto 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo."
  },
  {
   id: 2,
    image: ToProduct2,
    title: "Producto 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo."
  },
  {
    id: 3,
    image: ToProduct3,
    title: "Producto 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo."
  }
];

const ToProducts = () => {
  return (
    <div className="bg-blue-900 shadow-lg  p-5">
      <div className="container mx-auto">
        {/* Titulo */}
        <div className="text-center mb-10 max-w-[600px] mx-auto"> 
        <div className="p-2 border-2 border-gray-300 bg-gray-50 rounded-md inline-block w-96">
          <p className="text-sm text-primary font-semibold">Top Productos mas Vendidos </p>     
        </div>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*card section */}
            {ToProductsData.map((data) => (
              <div key={data.id} className="bg-gray-50 mx-auto rounded-lg overflow-hidden shadow-2xl scale-90"> {/* Added key prop */}
                <img src={data.image} alt="" className="w-full h-[350px] object-cover" />
                <Stack className="p-4 min-w-24">
                  <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
                  <p className="text-sm text-dark">{data.description}</p>
                  <Button variant="contained" size="small" className="" >Ordenar</Button>
                  </Stack>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToProducts;