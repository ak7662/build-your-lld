import { useState } from "react"

type event = {
  target: {
    value: string
  }
}

const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e: event) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e: event) => {
    setPassword(e.target.value)
  }

  const handleClear = () => {
    setUsername('')
    setPassword('')
  }

  const handleSubmit = () => {
    console.log(username)
    console.log(password);

  }

  return (
    <div className="container">
      <div className="form-container">
        <input name="username" type="text" placeholder="Username" value={username} onChange={handleUsername} /><br />
        <input name="password" type="password" placeholder="Password" value={password} onChange={handlePassword} /> <br />
        <div className="button-container">
          <button type="button" onClick={handleClear}>Clear</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div >
  )
}

export default App