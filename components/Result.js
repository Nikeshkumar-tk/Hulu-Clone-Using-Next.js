import Thumbnail from "./Thumbnail"

const Result = ({results}) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((data)=>(
       <Thumbnail key={data.id} result={data} className="mx-5"/>
      ))}
    </div>
  )
}

export default Result