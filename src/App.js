// import logo from './logo.svg';
import './App.css';
import Select from './components/userInteractions/Select';

function App() {
  const options = ['Option 1', 'Option 2', 'Option3']
  return (
    <div className="App">
      <Select options={options}/>
    </div>
  );
}

export default App;
