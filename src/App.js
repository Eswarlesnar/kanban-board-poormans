
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Backlog from './components/Backlog/BackLog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path = "/" element = {<Board />} />
          <Route path = "/tasks" element = {<Backlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
