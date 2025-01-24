import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-black text-white">
      <header className="bg-slate-500 flex justify-between items-center py-3 px-10 font-bold">
        <div>
          <p>
            Centro Médico Christian Barnard - Rua Leonor Calmon, 256 - loja 29
          </p>
          <p>Funcionamento: Seg a Sex: 08:00 às 18:00 | Sáb: 09:00 às 13:00</p>
        </div>
        <div className="flex gap-3">
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
