import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function MovieDetails(){

    

    const movie1=useParams()
    console.log(movie1)
    const [movieDetail ,setmoviedetail]= useState({})

    useEffect(() =>{
        axios.get( `https://api.themoviedb.org/3/movie/${movie1.id}`,{
            params:{api_key:"522cb6190fc33c8a5409ac4e0bbf078d"}
        })
        .then((res) => setmoviedetail(res.data))
        .catch((err) => console.log(err))
    })
    return (<>

            <center><h1>Movie Detalis</h1></center>
                <div className="p-5 my-4 row">

                    <div className="col-6 p-3">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}/>

                    </div>
                    <div className="col-6 p-5">
                        <h1 className="my-5">{movieDetail.title}</h1>

                        <p className="my-5 fs-5">{movieDetail.overview}</p>




                    </div>



                </div>
            </>)



}


export default MovieDetails