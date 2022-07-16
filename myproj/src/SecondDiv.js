import React from "react";
import Button from "./Button";
import { saveAs } from "file-saver";


class SecondDiv extends React.Component{

    constructor(){
        super()
    }
    // saveFile = () => {
    //     saveAs(
    //         "./index.html",
    //       "example.pdf"
    //     );
    //   };

    render(){
        return <>
                    <div className="row p-5">
                        <div className="col-5">
                            <h2 className="p-2 my-5"> About Me</h2>

                        </div>
                        <div className="col-7">
                                 <p className="text-wrap my-5">my name is katiee my age is 25 i syudy web devepop in iti for 9  ,my name is katiee my age is 25 i syudy web devepop in iti for 9omnth i born in cairo and i libe in aled i wio;d in oman for thsest days </p>
                                    <a href="./index.html" download={"http://localhost:3000/"}>
                                    <Button className="my-5" btntitle="Dowwnload Resume"/></a>
                                    {/* onclick={() => this.saveFile()} */}
                        </div>

                    </div>


                </>
    }
}

export default SecondDiv