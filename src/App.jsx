import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Header></Header>

      {/* chilldrens */}
      <Outlet></Outlet>

      {/* footer part */}
      <Footer></Footer>
    </div>
  )
}

export default App
