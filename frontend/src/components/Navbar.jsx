import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-950 shadow-lg p-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center ">
            {/* <Link to="/" className="text-xl font-bold text-neutral-500">
            <div class="w-full h-64">
            <img src="src/assets/AdvLogo.png" class="h-1 object-scale-down" alt="Image Description"/>
            </div>

            </Link> */}
            <Link to="/" className="text-xl font-bold text-neutral-500 flex items-center">
            <div className="w-auto h-12">  {/* Adjust the height to match your navbar */}
             <img src="/assets/AdvLogo.png" className="h-full object-contain" alt="Image Description" />
            </div>
            </Link>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-500 hover:text-slate-100">Home</Link>
            <Link to="/services" className="text-neutral-500 hover:text-slate-100">Services</Link>
            <Link to="/about" className="text-neutral-500 hover:text-slate-100">About</Link>
        
            <Link to="/contact" className="text-neutral-500 hover:text-slate-100">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center bg-slate-100">
            <button className="mobile-menu-button p-2" onClick={toggleMenu}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-neutral-500 hover:text-slate-100 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-neutral-500 hover:text-slate-100 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-neutral-500 hover:text-slate-100 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-neutral-500 hover:text-slate-100 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;