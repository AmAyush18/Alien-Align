import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 1, label: 'Home', url: '/' },
    { id: 3, label: 'Missions', url: '/play' },
    { id: 4, label: 'Support Us', url: '/support', isButton: true }
  ];

  const getLinkClasses = ({ isActive }) => {
    const baseClasses = "transition-colors";
    const textClasses = isActive ? "text-purple-400" : "text-white hover:text-purple-400";
    return `${baseClasses} ${textClasses}`;
  };

  const getButtonClasses = ({ isActive }) => {
    const baseClasses = "px-4 py-2 rounded-full bg-gradient-to-r transition-all text-white";
    const gradientClasses = isActive 
      ? "from-purple-500 to-pink-500"
      : "from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500";
    return `${baseClasses} ${gradientClasses}`;
  };

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/icon.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Alien Align
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map(item => (
              <NavLink
                key={item.id}
                to={item.url}
                className={item.isButton ? getButtonClasses : getLinkClasses}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1">
            {navigationItems.map(item => (
              <NavLink
                key={item.id}
                to={item.url}
                className={({ isActive }) => 
                  `block py-2 ${isActive ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;