
import {Routes,Route} from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import SignupAndLogin from "./components/SignupAndLogin"
import PersonalInformation from './components/PersonalInformation'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<SignupAndLogin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/personalInformation" element={<PersonalInformation/>} />
    </Routes>
  )
}

export default App
