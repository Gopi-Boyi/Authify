
import { ToastContainer } from 'react-toastify';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import EmailVerify from './Pages/EmailVerify';
import ResetPassword from './Pages/ResetPassword';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path ="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path= "/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App
