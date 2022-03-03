import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <form>
        <input type='email '/>
      
        <input type='file' />
        
        <input type='number' max={10} />
        
        <input type='text' required />

        <input type='password' />
        
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
