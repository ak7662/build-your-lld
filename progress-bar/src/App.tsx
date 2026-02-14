import useProgressBar from "./hooks/useProgressBar"

const App = () => {
  const { progress } = useProgressBar()
  return (
    <div>
      <div className="outer-container">
        <div className="inner-container" style={{ width: `${progress}%` }}></div>
      </div>
    </div >
  )
}


export default App