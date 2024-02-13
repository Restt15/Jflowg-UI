// Code: Advertising Component

import Image1 from "../assets/Advertising/sueteres.png.png";
import Image2 from "../assets/Advertising/sueters2.png.png";


import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "Sueteres",
        description: "Los mejores sueteres de la temporada"
    },
    {
        id: 2,
        image: Image2,
        title: "Sueteres",
        description: "Los mejores sueteres de la temporada"
    }
];


const Advertising = () => {

    var settings = {
        dots:false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    
return (
    <div className="relative overflow-hidden sm:min-h-[350px] flex justify-center bg-blue-200 items-center dark:bg-sky-800 dark:text-white duration-700">     
        {/* publicidad */}
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {ImageList.map((data) => (
                    <div className="flex flex-col bg-sky-100 p-3 rounded-lg shadow-lg h-1/2" key={data.id}>
                        {/* Textos de la Publicidad */}
                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                            <h1 className="text-5xl sm:text-6x1 lg:text-7x1 font-bold">
                                lorem ipsum dolor sit.
                                {data.title}
                            </h1>
                            <p className="text-sm">
                                lorem ipsum dolor sit. amet consectetur adipisicing elit.
                                {data.description}
                            </p>
                            <div>
                                <button
                                    className="px-3 py-2 border-2 border-blue-500 bg-blue-500 text-white rounded-md transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110
                                hover:bg-blue-700 hover:shadow-lg w-auto"
                                >
                                    Ordena Ahora
                                </button>
                            </div>
                        </div>
                        {/* Secciones Publicidad */}
                        <div className="order-1 sm:order-2">
                            <div className="relative z-10 ">
                                <img
                                    src={data.image}
                                    alt=""
                                    className="w-[300px] h-[300px] sm:h-[300px] sm:w-[400px] sm:scale-105 lg:scale-120 object-contain ml-auto mr-7 -mt-40"
                                />
                         </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
);
};

export default Advertising