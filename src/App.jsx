
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx"
import SignupAndLogin from "./pages/SignupAndLogin/SignupAndLogin.jsx"
import PersonalInformation from './pages/PersonalInformation/PersonalInformation.jsx'
import Address from './pages/Address/Address.jsx'
import Registered from './pages/Register/Registered.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'


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
