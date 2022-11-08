import { useState } from "react";
import boxes from "./boxes";
export default function Count(props){
    const style = props.on
    function styleChangeHelper(){
        return props.changer(props.id)
    }
    const boxStyle = {
        backgroundColor: style? "white" : "blue"
    }
    return(
        <div className="box" style={boxStyle} onClick={styleChangeHelper} >
            <h1>{props.id}</h1>
            <h1>{props.on? "true": "false"}</h1>
            
        </div>
    )
}