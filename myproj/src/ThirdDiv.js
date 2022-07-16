import React from "react";
import ProgressBar from "./ProgressBar";
import "./thirdDiv.css"


class ThirdDiv extends React.Component{
    constructor(){
        super()
    }

    render(){
        return <>
                    <div id="maindiv" className="bg-secondary p-5">
                        <div className="mx-auto">
                        <center><h1 className="my-3">Skills</h1></center>
                        <center> <div className="p-5 w-50"><p className="text-wrap my-5">my name is katiee my age is 25 i syudy web devepop in iti for 9  ,my name is katiee my age is 25 i syudy web devepop in iti for 9omnth i born in cairo and i libe in aled i wio;d in oman for thsest days </p></div></center>


                        <center>
                        <div className="row p-2">
                            <div className="col-5 p-3">
                                <h5>Myfocus</h5>

                                <hr/>
                                <p className="my-1">UI/UX</p>
                                <p className="my-1">PYTHON</p>
                                <p className="my-1">CSS</p>
                                <p className="my-1">WEB APP</p>






                            </div>
                            <div className="col-7 p-5">
                                <ProgressBar className="my-4" val="35%" val2="35"  title="html"/>
                                <br/>
                                <ProgressBar className="my-4" val="75%"  val2="75" title="python"/>
                                <br/>

                                <ProgressBar className="my-4" val="69%" val2="69"  title="css"/>
                                <br/>

                                <ProgressBar className="my-2" val="80%" val2="80"  title="js"/>
                                <br/>

                                <ProgressBar className="my-2" val="90%" val2="90"  title="web"/>
                                <br/>

                                <ProgressBar className="my-2" val="70%" val2="70"  title="css3"/>
                                <br/>



 




                            </div>

                        </div>
                        </center>
                        </div>
                    </div>



                </>
    }
}

export default ThirdDiv