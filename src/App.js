import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import AddBattery from "./pages/AddBattery";
import SearchBattery from "./pages/SearchBattery";
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import NavigationBar from "./layout/NavigationBar";
import Home from "./pages/Home";
import ShowAll from "./pages/ShowAll";
import EditBattery from "./pages/EditBattery";

function App() {
  return (
    <div className="App">
      <Router>
          <NavigationBar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/addbattery" element={<AddBattery/>} />
            <Route exact path="/searchbattery" element={<SearchBattery/>} />
            <Route exact path="/showall" element={<ShowAll/>} />
            <Route exact path="/editbattery/:batteryId" element={<EditBattery/>} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
