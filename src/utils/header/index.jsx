import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Header = () => {

    return (
        <div className="flex justify-between flex-row items-center">
            <div>
                <Link href="/" className="font-bold text-4xl">CUYANIMELIST</Link>
            </div>
            <div className="relative">
            <input 
                placeholder="cari anime..." 
                className="w-full p-4 rounded" 
            />
        </div>
        </div>
    )

}

export default Header