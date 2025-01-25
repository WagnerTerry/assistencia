import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imagePath: string | StaticImageData;
  buttonText: string;
  whatsappMessage: string;
}

export function ServiceCard({
  title,
  description,
  imagePath,
  buttonText,
  whatsappMessage,
}: ServiceCardProps) {
  const whatsappNumber = "+5521964463157"; // Número fixo do WhatsApp

  return (
    <div className="h-full">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col h-full">
        <div className="relative h-64">
          <Image src={imagePath} alt={title} fill objectFit="cover" />
        </div>
        <div className="p-8 text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
            <p className="text-gray-600 mb-8 text-sm">{description}</p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors text-base lg:text-lg font-bold text-center"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
