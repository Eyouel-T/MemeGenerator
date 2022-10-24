import { useState } from "react";
import memesData from "./memesData";
export default function Main(){
    const [num, setNum] = useState(0);
    
    function plus(){ 
        return setNum(num+1)
    }
    function minus(){   
        return setNum(num-1)
    }
    return (
        <div>
            
                <input type="text" className="top" placeholder="Shut up"></input>
                <input type="text" className="bottom" placeholder="and take my money"></input>
                <br/>
                <button onClick={plus} type="submit" className="submitButton">+</button>
                <p>{num}</p>
                <button onClick={minus} type="submit" className="submitButton">-</button>
                
            
        </div>
    )
}