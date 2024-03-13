import Image from "next/image"

//Components
import { ButtonMenu } from "../itemsMenus/ButtonMenu"
import { Search } from "../search/Search"


//Imagens

import logo from "@/assets/logo.svg"
import iconUser from "@/assets/icon-user.svg"
import { Container } from "../Container"




export function Header(){
    return(
        <header className=" relative flex items-center w-full h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>

            <Container>
                <div className="flex flex-1 justify-between items-center">
                    <div className="flex items-center gap-14">
                        <Image
                            src={logo}
                            alt="Logo"                        />
                  

                            <ul className="flex gap-12 items-center">
                                <li>
                                   <ButtonMenu name="Para você"/>
                                </li>

                                <li>
                                   <ButtonMenu name="Para empresas"/>
                                </li>

                                <li>
                                   <ButtonMenu name="Serviços"/>
                                </li>

                                <li>
                                   <ButtonMenu name="Ajuda"/>
                                </li>
                            </ul>
                    </div>

                    <div>
                        <Search/>
                    </div>
                </div>

                <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
                    <Image src={iconUser} alt="User"/>
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </Container>
        </header>
    )
}