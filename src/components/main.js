import { useState } from "react";
import memesData from "./memesData";
import placeHolder from "../Troll Face.png"
import Count from "./count";
import boxes from "./boxes";
export default function Main(){
    
    
    const [memeTexts, setMemeTexts] = useState(
        {
            topText:"",
             bottomText:"",
              randomImage:"http://i.imgflip.com/1bij.jpg"
            });
    function handleChange(event){
        const name = event.target.name
        console.log(name)
        const value = event.target.value
        console.log(value)
        memeGenerator()
        setMemeTexts(prevMemeText =>{
            return{
                ...prevMemeText,
                [name]:value
            }

        })
        
    }

    function handleSubmit(){
        alert(memeTexts)
    }


    const [allMemeImages, setAllMemeImages] = useState(memesData)
    function memeGenerator(){
    setMemeTexts(prevMeme=>({
        ...prevMeme,randomImage:imageIndex()
     }))
         
    }
    function imageIndex(){
        const randomIndex =  Math.floor(Math.random()*allMemeImages.length);
        return memesData[randomIndex].source
        
    }
    ///boxes 
    // const [first, setfirst] = useState(boxes);
    // function changeOn(id){
    //     ///console.log("changeOn function just called on"+ id);
    //     const newBoxes = first.map(a => {return{...a}});
    //     // console.log(newBoxes)
    //     // console.log(newBoxes.find(a=>a.id))
    //     // setfirst(newBoxes)
    //     console.log(newBoxes.find(a=>a.id==id).on=!first.find(a=>a.id==id).on);
    //     setfirst(newBoxes)
        
    // }
    
    
    // const boxView = first.map(box => {
    //     return <Count id={box.id} on={box.on} changer={changeOn} />})
    
    
    // form

    // const [formData, setFormData] = useState({top:"", bottom:""})
    // console.log(formData)
    // function handleInput(event){
       
    //     setFormData(prev =>{return{
    //         ...prev,[event.target.name]:event.target.value
    //     }})
        
    // }
    // const [formData, setFormData] = useState({
    //     email:"",
    //     password:"",
    //     confirmPassword:"",
    //     isJoined: false,
    // })



    // console.log(formData)
    // function handleform(event){
    //     event.preventDefault()
    //     const name = event.target.name
    //     const value = event.target.value
        

    //     setFormData(prevFormData=>{
    //         return{
    //             ...prevFormData,
    //             [name]: name=="isJoined" ? event.target.checked : value
    //         }
    //     })
    
        
    // }
    function submit(event){
        event.preventDefault()
    }
    return (
        <div className="main">
                <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="topText" className="top" placeholder="Shut up"></input>
                <input onChange={handleChange} type="text" name="bottomText" className="bottom" placeholder="and take my money"></input>
                <br/>
                <button type="submit" className="submitButton">Generate a new Meme image</button>
                <br/>
                
                <br/>
                </form>
                <div className="memeImage">
                    <img className="meme" src={placeHolder}/> 
                    <h1 className="memeTextTop">{memeTexts.topText}</h1>
                    <h1 className="memeTextBottom">{memeTexts.bottomText}</h1>
                </div>
                 
                {/* {boxView} */}
                {/* <form onSubmit={submit}>
                    <input type="email" name="email" value={formData.email} placeholder="email" onChange={handleform}></input>
                    <br></br>
                    <input type="password" name="password" value={formData.password}placeholder="password" onChange={handleform}></input>
                    <br></br>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="confirm password" onChange={handleform}></input>
                    <br></br>
                    <input type="checkbox" name="isJoined" checked={formData.isJoined} onChange={handleform}></input>
                    <br></br>
                    <button>submit</button>
                </form> */}
                
        </div>
    )
}