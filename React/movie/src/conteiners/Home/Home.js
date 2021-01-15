import {useSelector} from "react-redux";
import MovieItem from "../../components/Item/MovieItem";
import styles from './Home.module.css'


const Home=()=>{
    const {movies} = useSelector(({movies: {movies}}) => ({
        movies
    }))
    const {results}=movies
    console.log(results);
  return(
      <div className={styles.listWrapper} >
          {
              results && results.map(movie=><MovieItem item={movie} key={movie.id}/>)

          }
      </div>
  )
}
export default Home