
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Logincpy from "./capture2";

function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/capture" element={<Logincpy/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;