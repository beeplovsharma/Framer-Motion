import { useState } from 'react'
import './App.css'
import Basics from './components/Basics'
import Cycle from './components/Cycle'
import Drag from './components/Drag'
import ExpandCard from './components/ExpandCard'
import Sequence from './components/Sequence'
import DeskFirst from './components/DeskFirst'
import { MaskText } from './components/MaskText'
function App() {
  return (
    <>
      <div className='w-full min-h-screen'>
        <ExpandCard/>
        <Basics/>
        <Cycle/>
        <Drag/>
        <Sequence/>
        {/* <DeskFirst/> */}
        <MaskText/>
      </div>
    </>
  )
}

export default App
