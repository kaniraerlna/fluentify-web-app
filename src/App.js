import logo from "./assets/image/logo.svg";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./page/dashboard";
import Landing from './page/landing';
import Registration from './page/registration';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Registration} />
          <Route path="/Landing" Component={Landing} />
          <Route path="/Dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
