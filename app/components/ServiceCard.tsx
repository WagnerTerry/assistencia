import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imagePath: string | StaticImageData;
  buttonText: string;
}

export function ServiceCard({
  title,
  description,
  imagePath,
  buttonText,
}: ServiceCardProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col">
        <div className="relative h-64">
          <Image src={imagePath} alt={title} fill className="object-cover" />
        </div>
        <div className="p-8 text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
            <p className="text-gray-600 mb-8 text-sm">{description}</p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors text-lg font-bold">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
