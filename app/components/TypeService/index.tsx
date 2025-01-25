"use client";

import {
  Cpu,
  WrenchIcon,
  HardDrive,
  Monitor,
  Settings,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

export function TypeService() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 }, // Zoom-out e slide da esquerda
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2, // Delay progressivo baseado no índice
      },
    }),
  };

  const services = [
    {
      Icon: Cpu,
      title: "Reparo de placa lógica",
      description:
        "Somos especialistas em reparo e conserto de placa lógica que pode custar cerca de 50% do valor de uma nova placa.",
    },
    {
      Icon: WrenchIcon,
      title: "Manutenção preventiva",
      description:
        "A manutenção preventiva é essencial para garantir o bom funcionamento e evitar problemas futuros no seu Macbook ou iMac.",
    },
    {
      Icon: HardDrive,
      title: "Upgrade memória e SSD",
      description:
        "Melhore a performance do seu Macbook através de um upgrade de memória RAM ou com a troca de um SSD.",
    },
    {
      Icon: Monitor,
      title: "Instalação de sistema",
      description:
        "É importante atualizar o sistema do Mac para que seu computador Apple receba novos recursos e aprimoramentos de software.",
    },
    {
      Icon: Settings,
      title: "Reparo em geral",
      description:
        "Realizamos todo tipo de reparo em MacBooks, Fazemos o conserto em todos os modelos incluindo os Macs considerados vintage.",
    },
    {
      Icon: Smartphone,
      title: "Reparo em iPhones",
      description:
        "Realizamos todo tipo de reparo avançado em iPhones, troca de tela, troca de bateria, ou qualquer outro tipo de reparo.",
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-zinc-800">
      <div className="px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
          NOSSOS SERVIÇOS
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 text-black"
              custom={index} // Passa o índice para a variante
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Animação quando entra na viewport
              variants={cardVariants}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-600 text-lg">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
