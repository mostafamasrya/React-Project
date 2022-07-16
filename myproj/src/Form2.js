import { useState } from "react";



function Form2(){


    const [formData1 , setformData1 ] = useState({
        username:"",
        name:"",
        email:"",
        password:"",
        confirmpass:""
    })



    const [errorData1 , seterrorData1 ] = useState({
        userErr:"",
        emailErr:"",
        nameErr:"",
        passErr:"",
        confirmErr:""
    })


    const submitdata =(e) =>{
        e.preventDefault()


    }
    const userRegex=/\s/g;

    const emailRegex = /\S+@\S+\.\S+/;

    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,20}$/

    const changedata =(e) => {

        if(e.target.name === "username"){
            setformData1({
                ...formData1,
                username:e.target.value


            })

            seterrorData1({
                ...errorData1,
                userErr: e.target.value.length === 0  ? "this field is required" : userRegex.test(e.target.value) ?  "username must not have spaces" :""
            })


        }
        else if(e.target.name === "email"){
            setformData1({
                ...formData1,
                email:e.target.value
            })

            seterrorData1({
                ...errorData1,
                emailErr:e.target.value.length === 0 ? "this field is required" : emailRegex.test(e.target.value) ? "" : "must be email format" 

            })
        }
        else if (e.target.name === "name"){
            setformData1({
                ...formData1,
                name:e.target.value
            })
            seterrorData1({
                ...errorData1,
                nameErr:e.target.value.length === 0 ? "this field is required " : ""
            })
        }
        else if (e.target.name === "pass"){
            setformData1({
                ...formData1,
                password:e.target.value
            })
            seterrorData1({
                ...errorData1,
                passErr:e.target.value.length === 0 ? "this field is required " : passRegex.test(e.target.value) ? "" : "pass not less 8 char and  must  has at least 1 lower ,1 upper , 1 digit ,1 char"
            })
        }


        else if (e.target.name === "confirmpass"){
            setformData1({
                ...formData1,
                confirmpass:e.target.value
            })
            seterrorData1({
                ...errorData1,
                confirmErr:e.target.value.length === 0 ? "this field is required" : e.target.value === formData1.password ? "" : "confirm pass must match password"
            })
        }




    }



    return <>

            <div className="p-5 my-5">

                 <form onSubmit={(e) => submitdata(e)}>

                    <div className="mb-3">
                         <label htmlFor="username" className="form-label">username</label>
                        <input value={formData1.username} onChange={(e) =>changedata(e)} type="text" className="form-control" name="username" id="username" aria-describedby="emailHelp"/>
                            
                    </div>

                    <p className="text-danger">{errorData1.userErr}</p>



                    <div className="mb-3">
                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={formData1.email} onChange={(e) =>changedata(e)} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                    </div>
                    <p className="text-danger">{errorData1.emailErr}</p>



                    <div className="mb-3">
                         <label htmlFor="name" className="form-label">name</label>
                        <input type="text" value={formData1.name} onChange={(e) =>changedata(e)} className="form-control" name="name" id="name" aria-describedby="emailHelp"/>
                            
                    </div>

                    <p className="text-danger">{errorData1.nameErr}</p>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                         <input type="password" value={formData1.password} onChange={(e) =>changedata(e)} className="form-control" name="pass" id="exampleInputPassword1"/>
                    </div>
                    <p className="text-danger">{errorData1.passErr}</p>


                    <div className="mb-3">
                        <label htmlFor="confirmpass" className="form-label">Confirm Password</label>
                         <input type="password" value={formData1.confirmpass} onChange={(e) =>changedata(e)} className="form-control" name="confirmpass" id="confirmpass"/>
                    </div>
                    <p className="text-danger">{errorData1.confirmErr}</p>





                     <button type="submit" disabled={errorData1.nameErr || errorData1.userErr || errorData1.emailErr || errorData1.passErr || errorData1.confirmErr} className="btn btn-primary">Submit</button>
                </form>

            </div>




            </>
}

export default Form2