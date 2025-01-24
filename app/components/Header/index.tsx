import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-black text-white">
      <header className="bg-slate-500 py-3 px-10 flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <div>
          <p className="text-sm md:text-base text-center md:text-left">
            Centro Médico Christian Barnard - Rua Leonor Calmon, 256 - loja 29
          </p>
          <p className="text-sm md:text-base text-center md:text-left">
            Funcionamento: Seg a Sex: 08:00 às 18:00 | Sáb: 09:00 às 13:00
          </p>
        </div>

        <div className="flex gap-3 mt-3 md:mt-0 md:ml-4 justify-center md:justify-start">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 rounded-full p-3 flex items-center justify-center hover:bg-blue-600"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a
            href="https://wa.me/5551999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full p-3 flex items-center justify-center hover:bg-green-600"
          >
            <FaWhatsapp className="text-white text-lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 rounded-full p-3 flex items-center justify-center hover:bg-pink-600"
          >
            <FaInstagram className="text-white text-lg" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
