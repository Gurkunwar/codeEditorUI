import './App.css';
import Input from './components/Input';
import Output from './components/Output';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Input/>
      <Output/>
    </div>
  );
}

export default App;
