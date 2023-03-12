import{Route,Routes,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Post_job from './components/Post_job';

function App() {
  const user = localStorage.getItem('token');
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main/>}/>}
      <Route path ="/login" exact element={<Login/>}/>
      <Route path ="/signup" exact element={<Signup/>}/>
      {user && <Route path = "/postjob" exact element={<Post_job/>}/>}
      <Route path="/" exact element={<Navigate replace to="/signup"/>}/>
      <Route path="/postjob" exact element={<Navigate replace to="/signup"/>}/>
    </Routes>
  );
}
export default App;
