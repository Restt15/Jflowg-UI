import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="site-footer bg-blue-900">
        <div className="container">
        <div className="grid grid-flow-col justify-between">
            <div className="p-5">
            <h1 className="text-2xl font-bold text-white">About Us</h1>
            <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo dasdad adsadada
            dasdasdsad adasd adad asd .</p>
            </div>
            <div className="p-5 ">
            <h1 className="text-2xl font-bold text-white text-center">Redes Sociales</h1>
            <div className="flex justify-start">
                <div className="flex items-center"><FaWhatsapp className="mr-2"/>Escribenos en Whatsapp</div>
                <div className="flex items-center"><FaFacebook className="mr-2"/>Siguenos en Facebook</div>
                <div className="flex items-center"><FaInstagram className="mr-2"/>Siguenos en Instagram</div>
            </div>
            </div>
            <div className="p-5">
            <h1 className="text-2xl font-bold text-white">Contact</h1>
            <p className="text-sm mt-3">lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo dasdad adsadada
            dasdasdsad adasd adad asd .</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer