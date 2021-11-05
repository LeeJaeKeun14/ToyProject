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
      // axios.get("/users=Lee")
      //   .then(response => {
      //     console.log("여기까지는 응답")
      //     setUser(response.user)
      //     console.log(response.status)
      //   })
      //   .catch(
      //     console.log("야 큰일이다 접근 못한다.")
      //   );
        
      axios.post("/get/post", {"user": "elice"})
        .then(response => {
          console.log("여기까지는 응답")
          setName(response.user)
          console.log(response.user)
        })
        .catch(
          console.log("야 포스트도 망했다.")
        );
    }, [])
  
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
