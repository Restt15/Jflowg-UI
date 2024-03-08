/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge } from '@material-tailwind/react';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from "../assets/website/logo.png"

const Navbar = ({ cart }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Agrega un event listener para controlar el desplazamiento de la página
  window.onscroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className={`bg-white shadow-md ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
        <img src={Logo} alt="logo-ct" className="w-10" />
          <ul className="space-x-4 flex">
            <li>
              <Link to="/Home">
                <Button size="sm">Home</Button>
              </Link>
            </li>
            <li>
              <Link to="/Harticles">
                <Button size="sm">Articulos</Button>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <Button size="sm">Acerca de Nosotros</Button>
              </Link>
            </li>
            <li>
              <Link to="/Harticles/Cart" className="relative inline-block">
                <Badge content={cart.length}>
                  <Button size="sm" className="text-white relative w-auto">
                    <FaShoppingCart className="text-white" />
                  </Button>
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
