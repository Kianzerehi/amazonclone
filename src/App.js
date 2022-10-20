
import './App.css';
import NavBar from './Components/navbar';
import './styles/navbar.css'
import './styles/searchbar.css'
import './styles/body.css'
import './styles/card.css'
import './styles/checkout.css'
import Body from './Components/body'
import Checkout from './Components/checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  return (
  <Router>
  
    <NavBar />
    <Routes>
    <Route path='/' element={<Body />}/>
    <Route path='/checkout' element={<Checkout />}/>
   </Routes>
    </Router>)
}

export default App;
