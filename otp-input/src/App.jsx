import { useState } from 'react'
import './App.css'
import InputBox from './InputBox'

function App() {
  const [focuusInput, setFocusInput] = useState(1)

  return (
    <>
      <div className='app-container'>
        <InputBox
          InputBoxNo={1}
          focuusInput={focuusInput}
          setFocusInput={setFocusInput}
        />
        <InputBox
          InputBoxNo={2}
          focuusInput={focuusInput}
          setFocusInput={setFocusInput}
        />
        <InputBox
          InputBoxNo={3}
          focuusInput={focuusInput}
          setFocusInput={setFocusInput}
        />
        <InputBox
          InputBoxNo={4}
          focuusInput={focuusInput}
          setFocusInput={setFocusInput}
        />
        <InputBox
          InputBoxNo={5}
          focuusInput={focuusInput}
          setFocusInput={setFocusInput}
        />
        <InputBox
          InputBoxNo={6}
          focuusInput={focuusInput}
          setFocusInput={setFocusInput}
        />
      </div>
    </>
  )
}

export default App
