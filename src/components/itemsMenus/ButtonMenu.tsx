import Image from "next/image";
import Arrow from "@/assets/arrow-down.svg"

interface propsButton{
    name:string
}


export function ButtonMenu({name}:propsButton) {
  return (
    <>
      <button className="flex items-center gap-3 ">
        <span className="text-white font-bold">{name}</span>
        <Image src={Arrow} alt="arow_dropdown" />
      </button>
    </>
  );
}
