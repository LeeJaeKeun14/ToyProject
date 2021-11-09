import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState("Loading")
  const [name, setName] = useState("Loading")
  
  const Testing = () => {

    useEffect(() => {
      async function get_data() {
          // try ~ catch를 이용해 예외 처리를 하세요.
          try{
            const response = await axios.get("http://localhost:5000/get/users")
            setUser(response.data[0].user);
          } catch {
            console.log("야 큰일이다 접근 못한다.")
          }
      };
      get_data();
    }, []);

    useEffect(() => {
      async function post_data() {
          // try ~ catch를 이용해 예외 처리를 하세요.
          try{
            const response = await axios.post("http://localhost:5000/get/post", {"user": "elice"})
            setName(response.data);
          } catch {
            console.log("야 포스트도 망했다.")
          }
      };
      post_data();
    }, []);
  
    return <p>{user}...{name}</p>
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
