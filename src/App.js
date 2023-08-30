import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';

export default function App(){
  return(
    <div className = "App">
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/about" element ={<About />} />
        </Routes>
    </div>
  )
}
