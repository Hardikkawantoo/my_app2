import React, {useState} from 'react'

export default function TextArea() {
  const [text, SetText] = useState("Enter text here")
  const Clicked=()=>{
    let textinput = text.toUpperCase();
    SetText(textinput);
  }
  const handleChange =(event)=>{
    console.log("onchange");
    SetText(event.target.value)
  }
  return (
    <div>
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary" onClick={Clicked}>Click</button>
    </div>
  )
}
