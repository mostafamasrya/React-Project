
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import MYcard from "./Mycard"
import Spinner from "./Spinner"


function Movielist2(){

    const [MovieLists, setMovieLists ] = useState([])


    const [type1 , settype1 ] = useState("popular")

    const [isloading ,setisloading ] =useState(true)


    const changemovie = (e) => {
        settype1(e.target.value)

    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${type1}`,{
        params:{
          
            api_key:"522cb6190fc33c8a5409ac4e0bbf078d",
            


        },})
        .then((res) => {setMovieLists(res.data.results);
            setisloading(false)
        })
        .catch((err) => console.log(err))

    },[type1])



    return (
            <>
            <div className="p-5">
               <center><h1 className="m5-3">Movies List</h1></center> 

                <div className="p-4 my-5">
                     <select onChange={(e) => changemovie(e)} value={type1} className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                         <option value="Popular">Popular</option>
                         <option value="top_rated">top_rated</option>
                         <option value="now_playing">now_playing</option>
                         <option value="upcoming">upcoming</option>

                    </select>
                </div>



                {isloading ? (<Spinner/>) : (

                

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
                )}
              

           




            </div>
            </>
    )
}


export default Movielist2