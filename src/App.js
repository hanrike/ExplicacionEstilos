import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
     <span className='fondoNegro'>Hola mundo</span>
     <button type="button" className="btn btn-primary">Primary</button>
     <Card/>
    </div>
  );
}

export default App;
