import React from "react";


class ProgressBar extends React.Component{
    constructor(props){
        super()

    }
    render(){
        return <>
                 {/* <div className="progress">
                         <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            {this.props.title}</div>
                </div> */}
                <label for="file">{this.props.title} :</label>
                <progress id="file" value={this.props.val2} max="100"> {this.props.val}</progress>
        
            </>
    }
}
export default ProgressBar