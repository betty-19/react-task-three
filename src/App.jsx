
import {Routes,Route} from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import SignupAndLogin from "./components/SignupAndLogin"
import PersonalInformation from './components/PersonalInformation'
import Address from './components/Address/Address.jsx'
import Registered from './components/Registered'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<SignupAndLogin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/personalInformation" element={<PersonalInformation/>} />
      <Route path='/address' element={<Address/>}/>
      <Route path='/registered' element={<Registered/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default App
