import {
  Cpu,
  WrenchIcon,
  HardDrive,
  Monitor,
  Settings,
  Smartphone,
} from "lucide-react";

export function TypeService() {
  return (
    <section id="servicos" className="py-16 bg-zinc-800">
      <div className="px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
          NOSSOS SERVIÇOS
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="bg-white rounded-2xl p-8 text-black">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-gray-100 rounded-full">
                <WrenchIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold">Manutenção preventiva</h3>
              <p className="text-gray-600 text-lg">
                A manutenção preventiva é essencial para garantir o bom
                funcionamento e evitar problemas futuros no seu Macbook ou iMac
              </p>
            </div>
          </div>

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

          <div className="bg-white rounded-2xl p-8 text-black">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-gray-100 rounded-full">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold">Instalação de sistema</h3>
              <p className="text-gray-600 text-lg">
                É importante atualizar o sistema do Mac para que seu computador
                Apple receba novos recursos e aprimoramentos de software.
              </p>
            </div>
          </div>

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
  );
}
