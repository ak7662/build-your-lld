import { useState } from "react"
import Tab from "./components/Tab"
import Tabs from "./components/Tabs"

const App = () => {
  const [activeTab, setActiveTab] = useState("Home")
  return (
    <div>
      <Tabs setActiveTab={setActiveTab}>
        <Tab title="Home" active={activeTab === "Home"}>
          Home 12133123
        </Tab>
        <Tab title="About" active={activeTab === "About"}>
          Abhout dfjgndfgmnldkfg
        </Tab>
        <Tab title="Contact" active={activeTab === "Contact"}>
          Contact dfgjdnfgjdnfj
        </Tab>
      </Tabs>
    </div>
  )
}

export default App