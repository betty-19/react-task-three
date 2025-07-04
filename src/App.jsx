
import {Routes,Route} from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import SignupAndLogin from "./components/SignupAndLogin"
import PersonalInformation from './components/PersonalInformation'
import Address from './components/Address'
import Registered from './components/Registered'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<SignupAndLogin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/personalInformation" element={<PersonalInformation/>} />
      <Route path='/address' element={<Address/>}/>
      <Route path='/registered' element={<Registered/>} />
    </Routes>
  )
}

export default App
