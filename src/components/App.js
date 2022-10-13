import React, { useRef, useState } from 'react'
import '../styles/App.css';
import { IgnoreCaseToggle } from './IgnoreCaseToggle';
import { ParagraphInput } from './ParagraphInput';
import { WordInput } from './WordInput';
const App = () => {
  const [word, setWord] = useState("")
  const [wordCount,setWordCount] = useState(0)
  const ref = useRef()
  const [ignoreCase, setIgnoreCase] = useState(false)
  const highlight = (val,wordCase) =>{
    let newt = ''
    let i = 0
    if (wordCase) {
      const reg = new RegExp(val, 'ig')
      newt = ref.current.innerText.replaceAll(reg, (args) => {
        i++;
        return `<span class="highlighted-txt">${args}</span>`
      })
    } else {
      newt = ref.current.innerText.replaceAll(val, (args) => {
        i++;
        return `<span class="highlighted-txt">${args}</span>`
      })
    }
    setWordCount(i)

    ref.current.innerHTML = newt
  }
  const handleWordInput = (val) => {
    highlight(val,ignoreCase)
    setWord(val)
  }
  const handleChangeToggle = () =>{
    highlight(word,!ignoreCase)
    setIgnoreCase(!ignoreCase)

  }
  return (
    <div id="main">
      <ParagraphInput pRef={ref} />
      <div>Total matches:- <span id="words-counter">{wordCount}</span></div>
      <WordInput handleChange={handleWordInput} value={word} />
      <br />
      <IgnoreCaseToggle checked={ignoreCase} onChange={handleChangeToggle} />
      <span id="words-counter">{wordCount}</span>
    </div>
  )
}


export default App;
