import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import { useContext } from "react"
import { LangContext } from "./context/LangContext"



function Navbar(){

  const {contextLang , setContextLang} = useContext(LangContext)


  const count=useSelector((state) => state.count.count)
    return <>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/form1">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form2">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movielist">Movies </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/movielist2">Movies2 </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favorites </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="/users">USERS </Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" >{contextLang} </Link>
        </li>



        <li className="nav-item">
          <button className="btn btn-danger" onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}> Change Language</button>
        </li>


        <li className="nav-item">
        <i className="fa-solid fa-star mx-3 fs-4" style={{color:"gold"}}></i>

        </li>

        <li className="nav-item">
            <p>{count}</p>

        </li>


     




      </ul>

    </div>
         </div>
        </nav>

            </>
}

export default Navbar