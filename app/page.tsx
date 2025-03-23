import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { DemandPresentation } from "./components/DemandPresentation";
import { TypeService } from "./components/TypeService";
import { Doubts } from "./components/Doubts";
import { Testimonials } from "./components/Nav/Testimonials";
import { Contact } from "./components/Contact";

export default function Page() {
  return (
    <div className=" bg-black text-white">
      <Header />
      <Nav />
      <DemandPresentation />
      <TypeService />
      <Doubts />
      <Testimonials />
      <Contact />
      {/* Testimonials Section */}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+5521964463157"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
          1
        </span>
      </a>
    </div>
  );
}
