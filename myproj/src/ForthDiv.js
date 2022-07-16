


import React from "react";
import Card from "./Card";



class ForthDiv extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <>
        <div className="p-5">
            <h1 className="ms-5">Portfilio</h1>

            <div className="p-5">


                <div className="row my-3">
                    <div className="col-3 mx-2">
                        <Card title="web Application"/>

                    </div>

                    <div className="col-3 mx-2">
                    <Card title="python program"/>

                    </div>

                    <div className="col-3 mx-2">
                    <Card title="native js"/>

                    </div>

                </div>


                <div className="row my-3">
                    <div className="col-3 mx-2">
                    <Card title="machine learning"/>

                    </div>

                    <div className="col-3 mx-2">
                    <Card title="html and css"/>

                    </div>
                    
                    <div className="col-3 mx-2">
                    <Card title="mobile app"/>

                    </div>

                </div>


            </div>

        </div>

       


                </>
    }
}

export default ForthDiv