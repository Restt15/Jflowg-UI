/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { Button, Badge } from '@material-tailwind/react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart }) => {

  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-black text-2xl font-bold">My Website</div>
          <ul className="space-x-4 flex">
            <li>
              <Link to="/Home" >
                <Button size="sm">Home
                </Button>                
              </Link>
            </li>
            <li>
              <Link 
                to="/Harticles">
                <Button size="sm">Articulos
                </Button>
              </Link>
            </li>
            <li>
              <Link 
                to="/About">
               <Button size="sm">Acerca de Nosotros</Button>
              </Link>
            </li>
           <li>
            <Link to="/Harticles/Cart" className='relative-inline-block'>
              <Badge content={cart.length}> 
              <Button size="sm" className='text-white relative w-auto'>
              <FaShoppingCart className='text-white' />
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