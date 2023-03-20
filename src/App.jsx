import Header from "./components/Header";
import Footer  from './components/Footer'
import Contact from "./components/Contact";
import Servie from "./components/Servie";
import Home from "./components/Home";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
function App() {
  return (
    
   <Router>
    <Header/>
    <Routes>
    
    <Route path="/"element={<Home/>}/>
    <Route path="/Contact"element={<Contact/>}/>
    <Route path="/Seervie"element={<Servie/>}/>

    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
