import Container from "./Container";
import {useState,useEffect} from 'react'
export default function MainContainer({lettersConfig,style,emitChoosePreset}) {
 let [lettersArray,setLettersArray] = useState([...lettersConfig])
 let [selectedLetters,setSelectedLetters] = useState([])
 let [wordDisplayed,setWordDisplayed] = useState([])
 let [wordHistory,setWordHistory]= useState([])
  let [presets ,setPresets]=useState(!JSON.parse(localStorage.getItem('presets'))?[]:JSON.parse(localStorage.getItem('presets')))
let [selectedPreset ,setSelectedPreset]=useState(localStorage.getItem('selectedPreset'));
 let onLetterClick= (letter,index)=>{
 
  
 
  
   console.log(letter,index)
   let cloneWordDisplayed= [...wordDisplayed]
 
 
   let cloneLettersArray = [...lettersArray]
 
if(lettersArray[index].selectedLetters.some(selectedLetter=>selectedLetter===letter)){
 
      cloneLettersArray[index].selectedLetters = []
      cloneWordDisplayed[index]=''
   }else{
cloneLettersArray[index].selectedLetters = [letter]
 cloneWordDisplayed[index]=letter
   }
   setSelectedLetters(cloneLettersArray)
setWordHistory([...wordHistory,cloneWordDisplayed.join('')])
   setWordDisplayed(cloneWordDisplayed)
  
 
 }
 
 let choosePreset=(preset)=>{
   setSelectedPreset(preset)
   emitChoosePreset(preset)
   let lettersArray= JSON.parse(localStorage.getItem(preset))
  
setLettersArray(lettersArray.transformed)
  
 
  
 }
 
 useEffect(() => {
   if(localStorage.getItem('selectedPreset')===null){
     localStorage.setItem('selectedPreset','Default')
   }
  choosePreset(localStorage.getItem('selectedPreset'))
 
 }, []);
 return <div style={style? style:{}}>
    <select name="preset" value={selectedPreset} onChange={(e)=>choosePreset(e.target.value)}>
             <option value={'Default'}>Default</option>
             {presets.map(preset=><option value={preset}>{preset}</option>)}
            </select>
   <div style={{textAlign:'center',fontWeight:'600',fontSize:"80px"}}>
    
     {wordDisplayed.length === 0 || wordDisplayed.join() ===''  ? 'Start Typing...':wordDisplayed.join('')}
   </div>
   <div style={{margin:"20px",height:"78vh", overflowY:"auto"}}>
 
<div style={{ width:'90%', float:"left",textAlign:'center'}}>
<div style={{display: 'inline-block',backgroundColor:"white",padding:"24px"}}>
    {lettersArray.map((letters,index)=>{return <Container
       key = {index}
       style = {letters.style?{...letters.style,marginRight:'24px'}:{}}
       letters = {letters.letters}
       selectedLetters = {letters.selectedLetters}
       color = {letters.color}
       onLetterClick={(letter)=>onLetterClick(letter,index)}
       blockedLetters={letters.blockedLetters}
       >
     </Container>})
    
     }
      <div style={{clear:'both'}}></div>
     </div>
   
</div>
{[...wordHistory].length!=0 && <div style={{   float:"left",display: 'inline-block',backgroundColor:"white",padding:"24px", overflowY:"scroll",maxHeight:"70vh"}}>
   {[...wordHistory].reverse().map(word=>{return <p style={{fontWeight:'600', fontSize:'30px'}}>{word}</p>})}
</div>}
 
<div style={{clear:'both'}}></div>
   </div>
  
    
   
 </div>
}

