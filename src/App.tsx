
import './App.css';
import { Greet } from './component/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Harmeet" messageCount={100} isLoggedIn={true} />
    </div>
  );
}

export default App;
