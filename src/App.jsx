import { useState, useCallback, useEffect } from 'react'
import './App.css'
import img1 from './images/copyRegular.svg'

function App() {
  const [password , setPassword] = useState("")
  const [length , setLength] = useState(8)
  const [isNum , setIsNum] = useState(false)
  const [isChar , setIsChar] = useState(false)
  const [isUpper, setIsUpper] = useState(false)

function passwordGenerator(){
  let pass =""
  let str ="abcdefghijklmnopqrstuvwxyz"
  if(isNum) str+="0123456789"
  if(isChar) str+="*.@!#$%&~"
  if(isUpper) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for(let i=0; i<length;i++){
    let pos = Math.floor(Math.random()*str.length) 
    pass += str.charAt(pos)
  }
  setPassword(pass)
}
function copyToClipboard(){
  window.navigator.clipboard.writeText(password)
  alert("password copied to clipboard")
}

useEffect(passwordGenerator,[length,isChar,isNum,isUpper])

  return (
    <>

      <div className="mainContainer"> 
        <div className="appName">Password Generator</div>
        <div className="innerContainer">       
          <div className="container1">
            <input id='password' readOnly type="text" value={password} />
            <button className="copy" onClick={copyToClipboard}><img src={img1} alt="copy" /> </button>
          </div>
          <div className="container2">
            <div className="area1">
              <span className="lenText">Password Length</span>
              <span className='lenVal'>{length}</span>
            </div>
            <div className='area2'>
            <input
              id="length"
              type="range" 
              value={length} 
              min={8} max={30} 
              onChange={(e) => {setLength(e.target.value)}}/>
            </div>
            <div className="area3">
              <input id="chBox" type="checkbox" value={isChar} onChange={()=>{
                setIsChar(!isChar)
              }} />
              <label id='chBoxLabel' htmlFor="chBox">Include Character</label>
            </div> 
            <div className="area4">
              <input id='numBox' type="checkbox" value={isNum} onChange={()=>{
                setIsNum(!isNum)
              }}/>
              <label id='numBoxLabel' htmlFor="numBox">Include Number</label>
            </div> 
            <div className="area5">
              <input id='caseBox' type="checkbox" value={isUpper} onChange={()=>{
                setIsUpper(!isUpper)
              }} />
              <label id='caseBoxLabel' htmlFor="caseBox">Include Uppercase Letters</label>
            </div>        
          </div> 
          
        </div>
      </div>
    </>
  )
}

export default App
