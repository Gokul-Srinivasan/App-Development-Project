// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import './App.css';
import Homeproj from './component/Homepage';
import Description from './component/Description';
import Camera from './component/Camera';
import Speaker from './component/Speaker';
import Mic from './component/Mic';
import Screen from './component/Screen';
import Dj from './component/Dj';
import Led from './component/Led';
import Profile from './component/Profile'; 
import RegistrationPage from './component/Registration';
import Cart from './component/Cart';
import Chatbot from './component/Chatbot'
// import Ratings from './component/Ratings';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Homeproj />} />
          <Route exact path='/reg' element={<Register />} />
          <Route exact path='/description' element={<Description />} />
          <Route exact path='/camera' element={<Camera />} />
          <Route exact path='/speaker' element={<Speaker />} /> 
          <Route exact path='/mic' element={<Mic />} />
          <Route exact path='/screen' element={<Screen />} />
          <Route exact path='/dj' element={<Dj />} />
          <Route exact path='/led' element={<Led />} />
          <Route exact path='/register' element={<RegistrationPage />} />
          <Route exact path='/prof' element={<Profile />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/chat' element={<Chatbot/>} />
          {/* <Route exact path='/ratings' element={<Ratings />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
