import React from 'react'
import '../styles/App.css';
import { IgnoreCaseToggle } from './IgnoreCaseToggle';
import { ParagraphInput } from './ParagraphInput';
import { WordInput } from './WordInput';
const App = () => {
  return (
    <div id="main">
      <ParagraphInput />
      <WordInput/>
      <br />
      <IgnoreCaseToggle/>
    </div>
  )
}


export default App;
