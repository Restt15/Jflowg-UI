/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'; // Importa React y useState correctamente
import { Link } from 'react-router-dom';
import { Button, Badge, IconButton, MobileNav, Typography, Navbar } from '@material-tailwind/react';
import { FaShoppingCart } from 'react-icons/fa';

const NavbarSimp = ({ cart }) => {
  const [openNav, setOpenNav] = useState(false); // Usa useState en lugar de React.useState

  useEffect(() => {
    // Utiliza useEffect correctamente
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Agrega un array vacío como segundo argumento para ejecutar el efecto solo una vez

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as="li"
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to="/Home">
          <Button size="xl">Home</Button>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to="/Harticles">
          <Button size="xl">Articulos</Button>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to="/About">
          <Button size="xl">Acerca de Nosotros</Button>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link to="/Harticles/Cart" className="relative inline-block">
          <Badge content={cart.length}>
            <Button variant='filled' className="text-white relative w-auto">
              <FaShoppingCart className="text-white" />
            </Button>
          </Badge>
        </Link>
      </Typography>
    </ul>
  );

  return (
    
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none  px-4 py-2 lg:px-20 lg:py-4 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            JFLOWG
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    
  );
};

export default NavbarSimp;
