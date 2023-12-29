import AnimeList from "./components/AnimeList"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  
  const data = await response.json()
  console.log(data)
  
  return (
    <div>
      <h1>Hello Next.js!</h1>
      {data.data.map(data => {
        return (
          <div key={data.mal_id}>
            <AnimeList title = {data.title} images={data.images.webp.image_url}/>
          </div>
        )
      })}
    </div>
  )
}

export default Home