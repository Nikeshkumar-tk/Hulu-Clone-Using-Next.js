import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"

const Thumbnail = ({result}) => {
    const base_url="https://image.tmdb.org/t/p/original"
  return (
    <div className="group cursor-pointer transition duration-100 ease-in sm:hover:scale-105 z-50 p-2">

        <Image layout="responsive"src={`${base_url}${result.backdrop_path||result.poster_path}`}
        width={1920} height={1080}/>
        <div className="p-2">

            <p className="truncate max-w-md">
                {result.overview}
            </p>

            <h2 className="mt-2 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title||request.original_name}</h2>

            <p className="flex items-center">
                {result.media_type&&`${result.media_type} .`}{""}
                {result.release_date||result.first_air_date} .{""}
                <ThumbUpIcon className="h-5 mx-2"/>{result.vote_count}
            </p>

        </div>

        </div>
  )
}

export default Thumbnail