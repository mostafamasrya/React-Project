
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ChangeCounter } from "./store/actions/Count"
function MYcard({movie:{title,poster_path,id}}){


    const count =useSelector((state) => state.count.count)
    const ArrIds=useSelector((state) => state.count.ArrIds)

    const [color1 ,setcolor]=useState("green")


    const [IsFav , setIsFav] =useState("no")


   


    const dispatch=useDispatch()


    const handleFav=(e)=>{
       
        

        if(IsFav === "no"){

           



            if(ArrIds.includes(id) === false){
                dispatch(ChangeCounter(count+1,ArrIds.push(id)))

                

            }
            setcolor("gold")

            setIsFav("yes")

            console.log(ArrIds)

        }
        else{

            dispatch(ChangeCounter(count-1,ArrIds.splice(ArrIds.indexOf(id),1)))
            

            
            setcolor("green")

            setIsFav("no")

  
            

           
            console.log(ArrIds)

        
        }

        
    }



    return(<>
                <div className="mx-5 card" style={{width:" 18rem"}}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                             <p className="card-text">{title}</p>
                    

                         </div>



                         <div className="d-flex my-4 p-4 fs-4">

                            

                            <i className="fa-solid fa-star me-2" onClick={(e) => handleFav(e)} style={{color:`${color1}`}}></i>  <span>Add To Fav</span>
                         </div>


                         <Link to={`moviedetails/${id}`} className="btn btn-primary p-2">Movie Detalis</Link>
                </div>



            </>

    )
}

export default MYcard