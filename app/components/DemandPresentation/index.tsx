import { demands } from "@/app/constants/demands";
import { ServiceCard } from "../ServiceCard";

export function DemandPresentation() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
        <div className="relative z-20 px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Assistência Técnica Especializada Apple
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Realizamos reparos em:
              <br />
              MacBook, iMacs, iPhones, iPads, Videos Games , Notebooks e
              Celulares Androids
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demands?.map((demand, index) => (
              <ServiceCard key={index} {...demand} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
