"use client";
import { demands } from "@/app/constants/demands";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

export function DemandPresentation() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
        <div className="relative z-20 px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Assistência Técnica Especializada Apple
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Realizamos reparos em:
              <br />
              MacBook, iMacs, iPhones, iPads, Videos Games , Notebooks e
              Celulares Androids
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {demands?.map((demand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...demand} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
