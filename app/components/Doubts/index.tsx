"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion"; // Importando Framer Motion
import Macs from "../../images/macs.png";

// Variantes para a seção inteira
const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Inicialmente invisível e deslocado para baixo
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Aparece suavemente e volta à posição original
};

// Variantes para outros efeitos
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const slideVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export function Doubts() {
  return (
    // Adicionando motion.section aqui
    <motion.section
      id="duvidas"
      className="py-16 bg-white flex justify-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Imagem */}
          <div className="flex-shrink-0">
            <Image
              src={Macs}
              alt="Apple Device Family"
              width={500}
              height={400}
              className="w-full"
            />
          </div>

          {/* Perguntas Frequentes */}
          <div className="flex-grow">
            {/* Título */}
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-3xl md:text-4xl font-bold mb-8 text-black"
            >
              Perguntas frequentes!
            </motion.h2>

            <Accordion type="single" collapsible className="space-y-4">
              {/* Fade In/Out */}
              <AccordionItem value="repair-time" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-gray-100 hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    Quanto tempo leva o reparo?
                  </div>
                </AccordionTrigger>
                <AccordionContent asChild>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeVariants}
                    className="px-6 pt-2 text-gray-700"
                  >
                    Em média os procedimentos duram 40 minutos, porém vai
                    depender da demanda que a loja esteja no momento. Mas para
                    garantir o tempo indicado, agende o seu dia de reparo e
                    tenha a comodidade e tempo de reparo garantido. Você poderá
                    agendar via WhatsApp.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>

              {/* Slide */}
              <AccordionItem value="warranty" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-gray-100 hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    Quanto tempo tenho de garantia?
                  </div>
                </AccordionTrigger>
                <AccordionContent asChild>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideVariants}
                    className="px-6 pt-2 text-gray-700"
                  >
                    Oferecemos garantia em todos os nossos serviços. O período
                    específico será informado de acordo com o tipo de reparo
                    realizado.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>

              {/* Fade In/Out */}
              <AccordionItem value="safety" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-gray-100 hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    A Play Consert é segura?
                  </div>
                </AccordionTrigger>
                <AccordionContent asChild>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeVariants}
                    className="px-6 pt-2 text-gray-700"
                  >
                    Sim, somos uma empresa especializada com anos de experiência
                    no mercado e profissionais altamente qualificados.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>

              {/* Slide */}
              <AccordionItem value="pickup" className="border-none">
                <AccordionTrigger className="bg-zinc-700 rounded-lg px-6 py-4 text-gray-100 hover:no-underline [&[data-state=open]>div]:bg-zinc-600">
                  <div className="flex items-center text-left text-lg font-medium">
                    Vocês coletam e entrega?
                  </div>
                </AccordionTrigger>
                <AccordionContent asChild>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideVariants}
                    className="px-6 pt-2 text-gray-700"
                  >
                    Sim, oferecemos serviço de coleta e entrega para sua
                    comodidade. Entre em contato para mais detalhes.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
