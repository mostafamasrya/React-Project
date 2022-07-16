
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import MYcard from "./Mycard"


function Movielist(){

    const [MovieLists, setMovieLists ] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular",{
        params:{
          
            api_key:"522cb6190fc33c8a5409ac4e0bbf078d",
            


        },})
        .then((res) => setMovieLists(res.data.results))
        .catch((err) => console.log(err))

    },[])



    return (
            <>
            <div className="p-5">
               <center><h1 className="m5-3">Movies List</h1></center> 

              <div className="row row-col-1 row-cols-md-3 g-3 my-5 ">
                {MovieLists.map((movie,index) => {
                    return (
                        <div key={index}>
                                 <MYcard movie={movie} />
                     </div>

                    )


                })

                }


              </div>

              

           




            </div>
            </>
    )
}


export default Movielist