import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-500 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-white text-2xl font-bold">My Website</div>
          <ul className="space-x-4 flex">
            <li>
              <Link 
                to="/Home" 
                className="text-lg text-white font-semibold px-2 sm:px-5 py-2 border-2 border-blue-900 bg-blue-800 rounded-md transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                            hover:bg-blue-400 hover:text-white hover:shadow-lg">
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/Harticles" 
                className="text-lg text-white font-semibold px-2 sm:px-5 py-2 border-2 border-blue-900 bg-blue-800 rounded-md transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                            hover:bg-blue-400 hover:text-white hover:shadow-lg">
                Articulos
              </Link>
            </li>
            <li>
              <Link 
                to="/About" 
                className="text-lg text-white font-semibold px-2 sm:px-5 py-2 border-2 border-blue-900 bg-blue-800 rounded-md transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                            hover:bg-blue-400 hover:text-white hover:shadow-lg">
                Acerca de Nosotros
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;