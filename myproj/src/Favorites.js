import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"

import { ChangeCounter } from "./store/actions/Count"
import axios from "axios"




function Favorites(){

    const count =useSelector((state) => state.count.count)

    const Arr=useSelector((state) => state.count.ArrIds)

    const [MovieLists, setMovieLists ] = useState([])

    const myArr=[]



    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?",{
        params:{
          
            api_key:"522cb6190fc33c8a5409ac4e0bbf078d",
            


        },})
        .then((res) => {
            setMovieLists(res.data.results)



        })

       
        .catch((err) => console.log(err))

    },[])


        for( var i of Arr){

                
                
            for (var movie of MovieLists ){
                       

                    
                    
                if (movie.id === i ){
                        
                    myArr.push(movie)

                }
            }

            
        }



        const [color1 ,setcolor]=useState("gold")


        const [IsFav , setIsFav] =useState("yes")
            

        const dispatch=useDispatch()
        const handleFav=(e,id)=>{
       
        

            if(IsFav === "yes"){

                dispatch(ChangeCounter(count-1,Arr.splice(Arr.indexOf(id),1)))
                
                for (var movie of myArr){
                    if(movie.id === id){
                        myArr.splice(myArr.indexOf(movie),1)
                    }
                }
    
            }
            
                

            
        }
    




    return (<>

               <center> <h1 className="p-1">Favorite Movies</h1></center>



                <div className="row row-col-1 row-cols-md-3 g-3 my-5 ">

                {myArr.map((movie) => {
                    return (
                        <div className="mx-5 card" style={{width:" 18rem"}}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                             <p className="card-text">{movie.title}</p>
                    

                         </div>



                         <div className="d-flex my-4 p-4 fs-4">

                            

                            <i className="fa-solid fa-star me-2" onClick={(e) => handleFav(e,movie.id)} style={{color:`${color1}`}}></i>  <span>Add To Fav</span>
                         </div>


                         <Link to={`moviedetails/${movie.id}`} className="btn btn-primary p-2">Movie Detalis</Link>
                </div>
                     
    
                    )


                })

                }

                </div>

               
            </>)

}

export default Favorites