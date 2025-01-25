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
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image src={imagePath} alt={title} fill className="object-cover" />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 text-sm">{description}</p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors text-sm font-medium">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
