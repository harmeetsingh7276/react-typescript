
import './App.css';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Oscar } from './component/Oscar';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { Status } from './component/Status';

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
      {/* <Greet name="Harmeet" messageCount={100} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList}/> */}
      {/* <Heading>Heading text</Heading> */}
      <Oscar>
        <Heading>Heading text</Heading>
      </Oscar>
      <Status status='loading' />
      <Greet name="Harmeet" messageCount={100} isLoggedIn={true} />
    </div>
  );
}

export default App;
