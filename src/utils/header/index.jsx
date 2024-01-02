import Link from "next/link"
import InputSearch from "./searchInput"

const Header = () => {

    return (
        <div className="flex justify-between flex-row flex-wrap items-center">
            <div className="mb-52">
                <Link href="/" className="font-bold text-4xl">CUYANIMELIST</Link>
            </div>
            <div>
                <InputSearch/>
        </div>
        </div>
    )

}

export default Header