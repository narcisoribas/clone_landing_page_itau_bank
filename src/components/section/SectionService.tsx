//Reacts imports
import Image from "next/image";

//Components import
import { Container } from "../Container";

//images import
import phoneIcon from "@/assets/icon-phone.svg"
import solutionsIcon from "@/assets/icon-solutions.svg"
import optionsIcon from "@/assets/icon-options.svg"
import cardIcon from "@/assets/icon-card.svg"

import ImagePhone from "@/assets/phone.png"




export function SectionServices(){
    return(
        <section className="w-full h-[965px] relative ">
            <Container>
                <div className="flex-1 max-w-[594px] pt-36">
                    <span className="text-primary-orange text-sm font-bold uppercase mb-9 block">Serviços exclusivos</span>

                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa.</h2>

                    <p className="text-lg max-w-[584px] mb-16 text-second-gray">
                        Veja como você pode cuidar de suas finanças pelo app Itaú de
                         forma segura, rápida e o melhor, no conforto de sua casa.
                    </p>

                    <ul className="flex flex-col items-start gap-28">
                        <li className="flex items-center gap-3 pb-9 border-b-[1px]  border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={phoneIcon} alt="phone"/>
                            </div>
                            <p className="flex-1 txt-gray pr-1">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver.</p>
                        </li>


                        <li className="flex items-center gap-3 pb-9 border-b-[1px]  border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={solutionsIcon} alt="phone"/>
                            </div>
                            <p className="flex-1 txt-gray pr-1">Soluções de empréstimos e renegociação para organizar suas finanças.</p>
                        </li>

                        <li className="flex items-center gap-3 pb-9 border-b-[1px]  border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={optionsIcon} alt="phone"/>
                            </div>
                            <p className="flex-1 txt-gray pr-1">Diversas opções de investimentos, de acordo com o seu perfil de investidor.</p>
                        </li>

                        <li className="flex items-center gap-3 pb-5">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={cardIcon} alt="phone"/>
                            </div>
                            <p className="flex-1 txt-gray pr-1">Acompnahe o status do seu cartão de crédito e faça compras online com o seu cartão virtual.</p>
                        </li>
                    </ul>

                </div>
            </Container>

            <div className="absolute top-0 right-0 h-full w-[32%] flex items-center bg-gray-phone">
                <Image src={ImagePhone} alt="fone" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}   