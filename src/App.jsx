
import {Routes,Route} from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import SignupAndLogin from "./components/SignupAndLogin"

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<SignupAndLogin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default App
