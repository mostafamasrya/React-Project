import { useEffect, useState } from "react";
// import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import {GetUserList} from "./store/actions/Users"

import { Link } from "react-router-dom";

function ListUsers(){
  

    const users = useSelector((state)=>state.users.list);

    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(GetUserList()) 
    }, [])

    return(
        <>
           <center> <h1> Users List </h1></center>
            <div className="container row my-5" >
                        <div className="row p-5">
                            {
                                users.map((user)=> (
                                    // <div className="col-md-4" key={user.id}>
                                    //      <UserCard user={user} />
                                    // </div>
                                    <div className="card col-3 p-2 m-3">
                                         <div className="card-header">{user.username}</div>
                                            <div className="card-body">
                                                 <h5 className="card-title">{user.phone}</h5>
                                                 <p className="card-text">{user.email}</p>
                                        <Link className="btn btn-primary">Go somewhere</Link>
                                </div>
                                </div>
                                  
                                ))

                            }  

                        </div>
            </div>
        </>
    )
}

export default ListUsers;