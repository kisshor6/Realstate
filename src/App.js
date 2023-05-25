import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Contact from './component/Contact';
import FinalCard from './component/FinalCard';
import Sell from './component/Sell';
import SignUp from './component/SignUp';
import Agent from './component/Agent';
import About from './component/About';
import Cards from './component/Cards';
import Alert from './component/Alert';
import Profile from './component/Profile';
import EditSellProperty from './component/EditSellProperty';
import CardState from './context/CardState';


function App() {

  return (
    <>
      <CardState>
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route exact path="/" element={<Cards />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/FinalCard" element={<FinalCard />} />
            <Route exact path="/sell" element={<Sell />} />
            <Route exact path="/editsell/:id" element={<EditSellProperty />} />
            <Route exact path="/finalcard/:id" element={<FinalCard />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/agent" element={<Agent />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </CardState>
    </>
  );
}

export default App;
