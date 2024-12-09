import Image from "next/image";
import {
  Menu,
  Cpu,
  WrenchIcon,
  HardDrive,
  Monitor,
  Settings,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NegoBam from "./images/bam.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Previous sections remain unchanged - including them for completeness */}
      <header className="container px-4 py-4 flex items-center justify-between">
        <Image
          src={NegoBam}
          alt="Vou tacar"
          width={150}
          height={50}
          className="w-32"
        />
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
        <div className="container relative z-20 px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Assistência Técnica Especializada
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Realizamos reparos em:
              <br />
              MacBook, iMacs, iPhones, iPads, Videos Games , Notebooks e Celulares Androids
            </p>
          </div>
        </div>
      </section>

      {/* Service Image Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden bg-white p-4">
            <Image
              src={NegoBam}
              alt="Vou tacar"
              width={800}
              height={600}
              className="w-full rounded-xl"
            />
          </div>
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ASSISTÊNCIA TÉCNICA DE
              <br />
              MACBOOKS E IMAC
            </h2>
          </div>
        </div>
      </section>

      {/* iPhone Service Section */}
      <section className="py-16 bg-black">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden bg-white p-4">
            <Image
              src="/placeholder.svg"
              alt="iPhone Repair Components"
              width={800}
              height={600}
              className="w-full rounded-xl"
            />
          </div>
          <div className="max-w-3xl mx-auto text-center mt-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              ASSISTÊNCIA TÉCNICA DE IPHONE
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Seu iPhone molhou, caiu e precisa trocar a tela, reparar face ID
              ou touch ID, troca a bateria, ou qualquer outro reparo temos a
              melhor solução para seu iPhone.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full text-lg transition-colors"
            >
              Quero consertar meu iPhone
            </a>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-zinc-800">
        <div className="container px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            NOSSOS SERVIÇOS
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Previous service cards remain unchanged */}
            {/* Logic Board Repair Card */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Cpu className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Reparo de placa lógica</h3>
                <p className="text-gray-600 text-lg">
                  Somos especialistas em reparo e conserto de placa lógica que
                  pode custar cerca de 50% do valor de uma nova placa.
                </p>
              </div>
            </div>

            {/* Preventive Maintenance Card */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <WrenchIcon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Manutenção preventiva</h3>
                <p className="text-gray-600 text-lg">
                  A manutenção preventiva é essencial para garantir o bom
                  funcionamento e evitar problemas futuros no seu Macbook ou
                  iMac
                </p>
              </div>
            </div>

            {/* Memory and SSD Upgrade Card */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <HardDrive className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Upgrade memória e SSD</h3>
                <p className="text-gray-600 text-lg">
                  Melhore a performance do seu Macbook através de um upgrade de
                  memória RAM ou com a troca de um SSD
                </p>
              </div>
            </div>

            {/* System Installation Card */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Monitor className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Instalação de sistema</h3>
                <p className="text-gray-600 text-lg">
                  É importante atualizar o sistema do Mac para que seu
                  computador Apple receba novos recursos e aprimoramentos de
                  software.
                </p>
              </div>
            </div>

            {/* General Repair Card */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Settings className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Reparo em geral</h3>
                <p className="text-gray-600 text-lg">
                  Realizamos todo tipo de reparo em MacBooks, Fazemos o conserto
                  em todos os modelos incluindo os Macs considerados vintage.
                </p>
              </div>
            </div>

            {/* iPhone Repair Card */}
            <div className="bg-white rounded-2xl p-8 text-black">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Smartphone className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Reparo em iPhones</h3>
                <p className="text-gray-600 text-lg">
                  Realizamos todo tipo de reparo avançado em iPhones, troca de
                  tela, troca de bateria, ou qualquer outro tipo de reparo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg"
                alt="Apple Device Family"
                width={800}
                height={300}
                className="w-full mb-8"
              />
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Perguntas frequentes!
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="repair-time" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-white hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    Quanto tempo leva o reparo?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 text-gray-300">
                  O tempo de reparo varia de acordo com o serviço necessário.
                  Faremos uma avaliação detalhada e informaremos o prazo
                  específico para o seu caso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-white hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    Quanto tempo tenho de garantia?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 text-gray-300">
                  Oferecemos garantia em todos os nossos serviços. O período
                  específico será informado de acordo com o tipo de reparo
                  realizado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-white hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    A Play Consert é segura?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 text-gray-300">
                  Sim, somos uma empresa especializada com anos de experiência
                  no mercado e profissionais altamente qualificados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pickup" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-white hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    Vocês coletam e entrega?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 text-gray-300">
                  Sim, oferecemos serviço de coleta e entrega para sua
                  comodidade. Entre em contato para mais detalhes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

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
        href="https://wa.me/your-number"
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
