import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import UserInfo from './components/UserInfo';
import './App.css'
import { Users } from './components/Users';
import { User } from "./components/User";
import { CostHeading } from "./Views/CostHeading";
import { Add } from "./Views/CostHeading/add";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserInfo />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/users/:id" element={<User />} />
        <Route exact path="/costheading" element={<CostHeading />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </Router>
  )
}

export default App
