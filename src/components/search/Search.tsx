import Image from "next/image"
import iconSearch from "@/assets/icon-search.svg"



export function Search(){
    return(
        <div className="flex items-end gap-4 pr-5">
            <Image
                src={iconSearch}
                alt="search"
            />

            <input type="text" className="bg-transparent text-white outline-none placeholder:text-white" 
            placeholder="Buscar"/>
        </div>
    )
}