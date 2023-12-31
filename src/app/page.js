import Card from "@/components/card"
import Header from "@/utils/header"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  
  const data = await response.json()
  // console.log(data)
  
  return (
    <>
    <Header/>
    <div className="flex flex-wrap gap-3 justify-center bg-slate-100">
      {data.data.slice(0, 4).map(data => {
      // console.log(data)
        return (
          <Link href={`/anime/${data.mal_id}`} key={data.mal_id}>
            <Card title = {data.title} images={data.images.webp.image_url} year={data.year} rating={data.score}/>
          </Link>
        )
      })}
    </div>
    </>
  )
}

export default Home