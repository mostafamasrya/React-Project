import React from "react";
import "./header.css"
import Button from "./Button";



class HeaderComponent extends React.Component{
    constructor(){
        super()

    }
    render(){
        return <>
        <div id="headdiv" >
            <h1 className="my-5">Katie Reed</h1>
            <h1 className="my-5">Web Developer</h1>
            <Button className="btn btn-danger my-3" btntitle="contact me"/>


        </div>


            </>
    }
}
export default HeaderComponent