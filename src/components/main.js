import { useState } from "react";
import memesData from "./memesData";
export default function Main(){
    const [imageSource, setImageSource] = useState();
    function memeGenerator(){
        setImageSource(imageIndex())
        
    }
    function imageIndex(){
        const randomIndex =  Math.floor(Math.random()*memesData.length);
        return memesData[randomIndex].source
        
    }
    
    return (
        <div>
            
                <input type="text" className="top" placeholder="Shut up"></input>
                <input type="text" className="bottom" placeholder="and take my money"></input>
                <br/>
                <button onClick={memeGenerator} type="submit" className="submitButton">Generate a new Meme image</button>
                <br/>
                <img className="meme" src={imageSource}/>
            
        </div>
    )
}