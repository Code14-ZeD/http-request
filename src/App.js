import Posts from './components/GetApi';
import Put from './components/PutApi'
import './App.css';

function App() {
  return (
    <div className="App">
      <Posts/>
      <hr/>
      <Put/>
    </div>
  );
}

export default App;
