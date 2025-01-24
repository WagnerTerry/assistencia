import { NavMenu } from "./nav-menu";
import Image from "next/image"; // Certifique-se de importar o componente `Image` corretamente

import NegoBam from "../../images/bam.png";

export const Nav = () => {
  return (
    <div className="px-4 py-4 flex font-bold text-lg items-center justify-center">
      <Image
        src={NegoBam}
        alt="Vou tacar"
        width={150}
        height={50}
        className="mr-10"
      />
      <NavMenu />
    </div>
  );
};
