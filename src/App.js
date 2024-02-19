import './App.css';
import { NavLink } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Thank you for the opportunity!
        </p>
        Hacker News
        <div className='Nav'>
          <NavLink to='/top' className='NavLink'> Top Stories </NavLink>
          <NavLink to='/new' className='NavLink'> New Stories </NavLink>
          <NavLink to='/best' className='NavLink'> Best Stories </NavLink>
        </div>
      </header>
      <div className='App-content'>
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
