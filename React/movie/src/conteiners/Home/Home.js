import {useSelector} from "react-redux";

const Home=()=>{
    const {movies} = useSelector(({movies: {movies}}) => ({
        movies
    }))
    const {results}=movies
    console.log(results);
  return(
      <div>
          {
              results && results.map(movie => <div><img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/></div>)
          }
      </div>
  )
}
export default Home