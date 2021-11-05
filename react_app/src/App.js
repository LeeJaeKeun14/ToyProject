import './App.css';
import { useState } from 'react'
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState("Loading")
  
  const Testing = () => {
    axios.get("https://localhost:5000/users")
      .then(response => {
        setUser(response.user)
        console.log(response.status)
      });
  
    return <p>{user}...</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
