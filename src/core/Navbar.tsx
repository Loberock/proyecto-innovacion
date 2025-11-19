import Logo from "/logo.webp";

function Navbar() {
  return (
    <nav className="bg-black w-full h-20 px-5 flex items-center">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <a href="/">
          <img
            src={Logo}
            alt="Logo de Infinity Style"
            className="w-32 h-auto"
          />
        </a>

        <ul className="text-[#6A9DE4] flex items-center justify-center gap-5 font-medium">
          <li className="hover:scale-105 transition-all duration-300">
            <a href="">Inicio</a>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <a href="">Servicios</a>
          </li>
          <li className="px-4 py-1 bg-[#E6E6E6] rounded-xl text-[#0E59C2] cursor-pointer hover:scale-105 transition-all duration-300">
            <a href="">Recomendar Cortes</a>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <a href="">Productos</a>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <a href="">Contacto</a>
          </li>
        </ul>

        <div className="font-medium">
          <a href="/login" className="text-white">
            Hola,<span className="text-[#6A9DE4]"> Usuario</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
