import Card from "@/components/card"
import HeaderCategory from "@/components/header_category"
import { getAnimeResponse } from "@/libs/fetch-api"
import Header from "@/utils/header"
import Link from "next/link"

const Home = async ({ params }) => {
    const { keyword } = params

    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
    console.log(decodedKeyword)

    return (
        <div className="bg-slate-100 h-screen">
            <div className="bg-amber-500 w-full p-4">
                <Header />
            </div>
            <HeaderCategory title={"pencarian untuk: " + decodedKeyword  + "..."} />
            <div className="flex flex-wrap gap-3 justify-center">
                {searchAnime.data.map((data, index) => {
                    // console.log(data)
                    return (
                        <Link href={`/anime/${data.mal_id}`} key={index}>
                            <Card title={data.title} images={data.images.webp.image_url} year={data.year} rating={data.score} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home