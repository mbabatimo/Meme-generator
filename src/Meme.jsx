import React from "react";

export default function Meme(){

  const[meme, setMeme] = React.useState({
    topText:"TOP TEXT",
    bottomText:"BOTTOM TEXT",
    randomImage:"https://i.imgflip.com/24y43o.jpg"
  })

  const [allMemes,setAllMemes]= React.useState({})

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemes(data))
  },[])



function generateMeme(){
  const memeArray = allMemes.data.memes;
  const randomNumber = Math.floor(Math.random() *memeArray.length)
  const url = memeArray[randomNumber].url
  setMeme(prevMeme=>({
    ...prevMeme,
    randomImage:url
  }))
}





function handleChange(event){
  const {name, value} = event.target
  setMeme(prevMeme=>({
    ...prevMeme,
    [name]:value
  }))}


  return(
    <div className="meme--container">
    <div className="meme--input">
    <input 
    type="text" 
    className="text--input" 
    placeholder="Top text"
    name="topText"
    value={meme.topText}
    onChange={handleChange}
    />
    <input 
    type="text" 
    className="text--input"
    placeholder="Bottom text"
    name="bottomText"
    value={meme.bottomText}
    onChange={handleChange}
     />

    <button 
    className="meme--btn"
    onClick={generateMeme}
    >
      Generate Meme
      </button>
    </div>
    <div className="meme-image-container">
    <img 
    src={meme.randomImage}
    className="meme--image" 
    />

      <h1 className="meme--text top">{meme.topText}</h1>
      <h1 className="meme--text bottom">{meme.bottomText}</h1>
    </div>
    
    
  </div>
  )
  
}