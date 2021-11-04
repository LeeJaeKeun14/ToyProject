import './App.css';
import {
  Route,
  useHistory,
  useParams,
} from "react-router-dom";



function App() {

  const Testing = () => {
    return <p>Testing...</p>
  }

  return (
    <div>
      <Route exact path="/">
        <Testing />
      </Route>
    </div>
  );
}

export default App;
