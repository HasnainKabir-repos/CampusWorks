import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Post_job from './components/Post_job';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Chat from './components/Chat/Chat';
import EmailVerify from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from "./components/PasswordReset";

function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main/>}/>}
      {user && <Route path = "/jobs" exact element={<Jobs/>}/>}
      {user && <Route path = "/profile" exact element={<Profile/>}/>}
      {user && <Route path = "/postjob" exact element={<Post_job/>}/>}
      <Route path ="/login" exact element={<Login/>}/>
      <Route path ="/signup" exact element={<Signup/>}/>
      
      <Route path="/" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/postjob" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/profile" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/jobs" exact element={<Navigate replace to="/login"/>}/>
      <Route path="/chat" element={user ? <Chat /> : <Navigate to="../login" />}/>
      <Route path="/users/:id/verify/:token" element={<EmailVerify/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
    
    </Routes>
  );
}
export default App;

