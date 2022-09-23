
import './App.css';
import { Button } from './component/Button';
import { Container } from './component/Container';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Input } from './component/Input';
import { Oscar } from './component/Oscar';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { LoggedIn } from './component/state/LoggedIn';
import { User } from './component/state/User';
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
      {/* <Button handleClick={(e,id)=>{
        console.log("Button Clicked",e,id)
      }} /> */}
      {/* <Input value='Harmeet' handleChange={(event)=>console.log(event)} /> */}
      {/* <Container styles={{border:'10px solid black'}} /> */}
      {/* <LoggedIn/> */}
      <User/>
    </div>
  );
}

export default App;
