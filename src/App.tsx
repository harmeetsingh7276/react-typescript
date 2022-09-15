
import './App.css';
import { Greet } from './component/Greet';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';

function App() {
  const personName = {
    first: "Harmeet Singh",
    last: "Gorowada"
  }
  const nameList = [
    {
      first: "Harmeet Singh",
      last: "Gorowada"
    },
    {
      first: "Pawandeep Kaur",
      last: "Gorowada"
    },
    {
      first: "Charanjit Kaur",
      last: "Gorowada"
    },
    {
      first: "Dharampal Singh",
      last: "Gorowada"
    }
  ]
  return (
    <div className="App">
      <Greet name="Harmeet" messageCount={100} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
  }

export default App;
