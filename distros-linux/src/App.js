import './css/Global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './screens/HomePage';
import Distros from './screens/Distros';
import Login from './screens/Login';
import Register from './screens/Register';
import News from './screens/News';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/distros/' element={<Distros />} />
        <Route path='/login/' element={<Login />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/news/' element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
