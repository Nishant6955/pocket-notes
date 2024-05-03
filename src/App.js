import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import CreateNewForm from './Components/CreateNewForm';



function App() {
  return (
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/CreateNewForm" element={<CreateNewForm/>}/>

     </Routes>
  );
}

export default App;
