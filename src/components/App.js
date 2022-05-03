import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import '../App.css'

import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route  path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
