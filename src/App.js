import './App.css';
import { ShowStories } from './components/ShowStories';

function App() {
  const type = 'top';

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Thank you for the opportunity!
        </p>
        Hacker News
      </header>
      <div className="App-content">
        <ShowStories type={type}/>
      </div>
    </div>
  );
}

export default App;
