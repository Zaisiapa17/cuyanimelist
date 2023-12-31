import Card from "@/components/card/index"
import HeaderCategory from "@/components/header_category"
import { getAnimeResponse } from "@/libs/fetch-api"
import Header from "@/utils/header"
import Link from "next/link"

const Home = async () => {
    const topAnime = await getAnimeResponse("top/anime", "limit=12")
    // console.log(topAnime)

    return (
        <div className="bg-slate-100 h-screen">
            <div className="bg-amber-500 w-full p-4">
                <Header />
            </div>
            <HeaderCategory title={"Anime Populer"} />
            <div className="flex flex-wrap gap-3 justify-center">
                {topAnime.data.map((data, index) => {
                    // console.log(data)
                    return (
                        <Link href={`/anime/${data.mal_id}`} key={index}>
                            <Card title={data.title} images={data.images.webp.image_url} year={data.year} rating={data.score} />
                        </Link>
                    )
                })}
            </div>
            <HeaderCategory title={"Rekomendasi"} />
            <div className="flex flex-wrap gap-3 justify-center">
                {topAnime.data.map((data, index) => {
                    // console.log(data)
                    return (
                        <Link href={`/anime/${data.mal_id}`} key={index} className="hover:text-amber-600">
                            <Card title={data.title} images={data.images.webp.image_url} year={data.year} rating={data.score} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home