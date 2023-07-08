import "./App.css"
import useRoutersElement from "./useRoutersElement"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const routerElement = useRoutersElement()

  return <div className="">{routerElement}</div>
}

export default App
