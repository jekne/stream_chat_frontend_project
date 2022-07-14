import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Routes>

<Route exact path="/" element={<Login />} />

</Routes>
    </div>
  );
}

export default App;
