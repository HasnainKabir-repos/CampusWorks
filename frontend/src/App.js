import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Post_job from './components/Post_job';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Chat from './components/Chat/Chat';

function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main/>}/>}
      {user && <Route path = "/jobs" exact element={<Jobs/>}/>}
      {user && <Route path = "/profile" exact element={<Profile/>}/>}
      {user && <Route path = "/postjob" exact element={<Post_job/>}/>}
      {user && <Route path = "/chat" exact element={<Chat/>}/>}
      <Route path ="/login" exact element={<Login/>}/>
      <Route path ="/signup" exact element={<Signup/>}/>
      
      <Route path="/" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/postjob" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/profile" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/jobs" exact element={<Navigate replace to="/signup"/>}/>
      
     
    </Routes>
  );
}
export default App;

