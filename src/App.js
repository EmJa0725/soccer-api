import "./App.css";
import { Routes, Route} from "react-router-dom";
import Standings from "./components/Standings";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/standings/:league"} element={<Standings />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
