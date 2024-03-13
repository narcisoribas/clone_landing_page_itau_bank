import Image from "next/image";

//Components
import { Container } from "../Container";


//imagens/assects

import imageAppleStore from "@/assets/btn-apple-store.svg"
import imageGooglePlay from "@/assets/btn-google-play.svg"
import Arrow from "@/assets/arrow-explorer.svg"
import womanImag from "@/assets/woman.png"



export function SectionHero(){
    return(
        <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-cover bg-center">
            <Container>
                <div className="flex-1  max-w-[500px]">
                    <h1 className=" text-white text-7xl font-bold mb-4">Tenha o seu banco na palma da mão</h1>
                    
                    <p className="text-white max-w-[408px] text-xl mb-8">
                        Todas as operações que você precisa em um só lugar. Simples,
                         completo e feito para você!
                   </p>

                   <div className="flex items-center gap-4 mb-24">
                        <button>
                            <Image src={imageAppleStore} alt="apple store"/>
                        </button>

                        <button>
                            <Image src={imageGooglePlay} alt="google play"/>
                        </button>
                   </div>

                   <button className="flex  items-center gap-3">
                    <Image src={Arrow} alt="Arrow down"/>
                    <span className="text-white text-sm font-bold">Continue explorando</span>
                    </button>

                </div>

                <Image src={womanImag} alt="woman image " className="mr-[-41px]"/>
            </Container>
        </section>
    )
}