import { NavLink } from 'react-router-dom';


const links = [
  {
    name: 'Home',
    url: '/Home',
  },
  {
    name: 'Articulos',
    url: '/Harticles',
  },
  {
    name: 'Acerca de Nosotros ',
    url: '/About'
  }
];

const Navbar = () => {
  return (
  <div className="bg-blue-500 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-white text-2xl font-bold">My Website</div>
          <div className="space-x-4">
            {links.map((link, index) => (
              <NavLink 
                key={index} 
                to={link.url} 
                activeClassName="border-b-2 border-yellow-300 transform scale-110"
                className="text-lg text-white font-semibold px-2 sm:px-5 py-2 border-2 border-blue-900 bg-blue-800 rounded-md transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110 
                            hover:bg-blue-400 hover:text-white hover:shadow-lg">
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
  </div>
  );
};

export default Navbar;