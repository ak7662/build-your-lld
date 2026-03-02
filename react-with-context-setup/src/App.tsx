import { useUser } from "./context/UserContextProvider";

const App = () => {
  const { user } = useUser()
  console.log(user);

  return (
    <div>
      hello
    </div>
  )
}

export default App;