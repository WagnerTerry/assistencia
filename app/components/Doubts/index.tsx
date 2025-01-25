import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function Doubts() {
  return (
    <section id="duvidas" className="py-16 bg-black">
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
                Sim, somos uma empresa especializada com anos de experiência no
                mercado e profissionais altamente qualificados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pickup" className="border-none">
              <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-white hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                <div className="flex items-center text-left text-lg font-medium">
                  Vocês coletam e entrega?
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-2 text-gray-300">
                Sim, oferecemos serviço de coleta e entrega para sua comodidade.
                Entre em contato para mais detalhes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
