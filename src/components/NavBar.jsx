const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">InfoCheck</h1>
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#home" className="hover:text-green-600">Home</a></li>
          <li><a href="#about" className="hover:text-green-600">About Us</a></li>
          <li><a href="#services" className="hover:text-green-600">Services</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
