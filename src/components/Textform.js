import React , {useState} from 'react'

export default function Textform(props) {

const handleupclick = () => {
    console.log("You clicked")

    let newtext = text.toUpperCase();
    
    // newtext;
    setText(newtext)
}

const handleloclick = () => {
    console.log("You clicked")

    let newtext = text.toLowerCase();
    
    // newtext;
    setText(newtext)
}

const handleonchange = (event) => {
    console.log("onchange")

setText(event.target.value);
}

    const [text, setText] = useState("");
    return (
    
    <div>
<div className="mb-1">
    <h2>
  <label htmlFor="labelarea1" style ={{color : props.mode  === 'dark'?'white':'black'}} className="constainer my-1" >{props.title} </label>
   </h2>
  <textarea className="form-control" style={{backgroundColor : props.mode  === 'dark'?'#042743':'white' , color : props.mode  === 'dark'?'white':'black'}} onChange={handleonchange}  value = {text} id="area1" rows="5"></textarea>
 
  <div  className="container my-1 " style ={{color : props.mode  === 'dark'?'white':'black'}}>
  <button className="btn btn-primary my-3" onClick={handleupclick} > Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleloclick} > Convert to Lowercase</button>

  <p>Text Summary</p>
  <p>Words: { text[-1]==' ' || (text.split(' ').length==1 && text.length==0) ? text.split(' ').length-1 : text.split(' ').length} and {Math.max(0,text.length-1)} Characters  </p>
  <h2>Preview</h2>
  {text}
  </div>
</div>
  </div>
  )
}
