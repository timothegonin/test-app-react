// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import GetAllByRole from './components/Queries/GetAllByRole';

function App() {
  const buttons = ["Button 1","Button 2", "Button 3"]
  const [btns, setBtns] = useState(buttons)

  return (
    <div className="App">
      <GetAllByRole btns={btns}/>
    </div>
  );
}

export default App;
