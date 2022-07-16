import React from "react";
import "./button.css"


class Button extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return <>
                <button className="btn btn-danger">{this.props.btntitle}</button>
                </>
    }
}


export default Button