


import React from "react";
import Button from "./Button";




class Footer extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <>
                <div className="p-3 bg-info row">
                    <div className="col-4">
                        <h1 className="my-2">Get in Touch</h1>

                        <p className="my-2">mostafaIti@gmail.com</p>

                        <p className="my-2">+02013126985</p>


                    </div>


                    <div className="col-4 my-5">
                        <Button btntitle="Contact Me" />


                    </div>


                    <div className="col-4 my-4">
                    <i class="fa-brands fa-linkedin mx-2"></i>
                    <i class="fa-brands fa-facebook mx-2"></i>
                    <i class="fa-brands fa-youtube mx-2"></i>


                        <p>copyrights@Iti.eg</p>

                    </div>

                </div>


                </>
    }
}

export default Footer