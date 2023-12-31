import Link from "next/link"

const HeaderCategory = ({ title }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-slate-700">{title}</h1>
            <Link href={"/"} className="md:text-xl text-sm underline hover:text-slate-400 text-color-primary transition-all">
                lihat semua
            </Link>
        </div>
    )
}

export default HeaderCategory