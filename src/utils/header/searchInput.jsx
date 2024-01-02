"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()    
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input 
                placeholder="cari anime..." 
                className="w-full p-4 rounded" 
                ref={searchRef}
                onKeyDown={handleSearch}
            />
        </div>
    )
}

export default InputSearch