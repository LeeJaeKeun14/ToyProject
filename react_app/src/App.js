import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const Testing = () => {
    return <p>Testing...</p>
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
