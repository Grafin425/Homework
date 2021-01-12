import axios from "axios";

export const AXIOS=axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGY3ZTU5ODI1YzZhMjhmN2IwZjg4YjM2MDI5MTk5YiIsInN1YiI6IjVmZmRmN2ZiNDdjOWZiMDA0MTdiY2UyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MU3uCaojsopMDksZsYBylFeGNo6lG7STPZPrgiMBmg0'
    }
})