import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { DemandPresentation } from "./components/DemandPresentation";
import { TypeService } from "./components/TypeService";
import { Doubts } from "./components/Doubts";

export default function Page() {
  return (
    <div className=" bg-black text-white">
      <Header />
      <Nav />
      <DemandPresentation />
      <TypeService />
      <Doubts />

      {/* Testimonials Section */}
      <section className="py-16 bg-zinc-100">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Depoimentos
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes dizem sobre nós
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Play Consert Logo"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-bold text-black">
                  Play Consert - Assistência Especializada iPhone e Macbook
                </h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">99 avaliações no Google</p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Escreva sua avaliação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
