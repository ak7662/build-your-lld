import { useState } from "react"
import Modal from "./components/Modal"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        hello modal
      </Modal>
      <p>hello line oone</p>
      <p>hello line oone</p>
      <p>hello line oone</p>
      <p>hello line oone</p>
      <p>hello line oone</p>
      <p>hello line oone</p>
      <p>hello line oone</p>
      <button type="button" onClick={handleClick}>Open MOdal</button>
    </div>
  )
}

export default App