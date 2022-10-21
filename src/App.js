import './App.css';
import Greet from './components/greet';
import Message from './components/message';
function App() {
  return (
    <div className="App">
      * <Greet name='Anand' work='Blockchain Devloper' />
      <button>Click to Know More</button>
      <Greet name='Suresh' work='Full stack Devloper'>
        <button>Click to Know More</button>
      </Greet>
      <Greet name='Shiva' work='Tester'/>
      <button>Click to Know More</button>
      <p>This Is children props</p> 

      <Message />
    </div>
  )
}

export default App;
