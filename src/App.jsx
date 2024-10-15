import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Radio from './pages/Radio/Radio';
import Press from './pages/Press/Press';
import Competitions from './pages/Competitions/Competitions';
import Interviews from './pages/Interviews/Interviews';
import Videos from './pages/Videos/Videos';
import Team from './pages/Team/Team';
import GoToTop from './components/GoToTop/GoToTop';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/press" element={<Press />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <GoToTop /> 
      </main>
      <Footer />
    </Router>
  );
}

export default App;
