import './App.css';
import Person from './Person'
import Event from './Event';

function App() {
  return (
    <div>
      <Person name='Metin' age='42'/>
      <Person name='Deniz' age='14'/>
      <Person name='Aras'/>
      <Event />
    </div>
  );
}

export default App;
