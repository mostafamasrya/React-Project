import React from "react";



class Card extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return <>
        <div className="bg-secondary p-5" style={{height:"10rem"}}>
            <h5>{this.props.title}</h5>
            <hr/>

        </div>
                
                </>
    }
}


export default Card