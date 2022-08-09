import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { Routes, Route } from 'react-router-dom';
import ChatDisplay from './Pages/ChatDisplay';


function App() {
  return (
    <div className="App">
     <Routes>

<Route exact path="/" element={<Login />} />
<Route path='/chat' element={<ChatDisplay/>}/>

</Routes>
    </div>
  );
}

export default App;
