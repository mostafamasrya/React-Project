import { useState } from "react";



function Form1(){


    const [formData , setformData] = useState({
        email:"",
        password:""
    })


    const [errorData , seterrorData] = useState({
        emailErr:"",
        passError:""
    })

    const emailRegex = /\S+@\S+\.\S+/;
    // const [isValid, setIsValid] = useState(false);
    // const [emailRegex1 , setemailRegix1 ] = useState(/\S+@\S+\.\S+/)



    const changedata =(e) => {
        if (e.target.name === "email"){
            setformData({
                ...formData,
                email:e.target.value
            })

            seterrorData({
                ...errorData,
                emailErr: emailRegex.test(e.target.value) ?  "":"input must be email"
            })
        }
        else{
            setformData({
                ...formData,
                password:e.target.value
            })
            seterrorData({
                ...errorData,
                passError: e.target.value.length < 8 ? "password must be > 8 char" : ""
            })

        }
    }

    const submitdata =(e) =>{
        e.preventDefault()





    }

    // const type1="password"


    const [typedata , settypedata ] = useState({
        type2:"password"
    })

    const hidepass =() =>{
        // console.log("yessssssssssssssss")

        if(typedata.type2 === "password"){
            settypedata({
                ...typedata,
                type2: "text"

            })
           
        }
        else{
            settypedata({
                ...typedata,
                type2: "password"

            })
           
            
        }



    }


  



    return <>

            <div className="p-5">
                 <form onSubmit={(e) => submitdata(e)}>
                     <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                             <input type="email" onChange={(e) => changedata(e)} className={`form-control ${errorData.emailErr ? "border-danger" : ""}`} name="email" value={formData.email} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                           
                    </div>
                    <p className="text-danger">{errorData.emailErr}</p>

                     <div className="mb-3">
                        <label htmlFor="exampleInputPassword1"  className="form-control"  >Password</label>
                            <input  type={typedata.type2} onChange={(e) => changedata(e)} name="password" className={`form-control ${errorData.passError ? "border-danger" : ""}`} value={formData.password} id="exampleInputPassword1"/>




                            <div className="input-group-append">
                                <span className="input-group-text" >
                                  <i className="fas fa-eye" id="show_eye"   onClick={() => hidepass()} ></i>
                                   <i className="fas fa-eye-slash d-none" id="hide_eye" ></i>
                                </span>
                            </div>
                    </div>
                    <p className="text-danger">{errorData.passError}</p>


                     <button type="submit" disabled={errorData.emailErr || errorData.passError} className="btn btn-primary">Submit</button>
                </form>

            </div>


            </>
}

export default Form1