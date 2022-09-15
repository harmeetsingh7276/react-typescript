
import './App.css';
import { Greet } from './component/Greet';
import { Person } from './component/Person';

function App() {
  const personName={
    first:"Harmeet Singh",
    last:"Gorowada"
  }
  return (
    <div className="App">
      <Greet name="Harmeet" messageCount={100} isLoggedIn={true} />
      <Person name={personName}/>
    </div>
  );
}

export default App;
