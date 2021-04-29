// import logo from './logo.svg';
import './App.css';
import './components/Box.css';

// import appImage from './assets/images/app-proposed-image.jpg';
import CardLayout from './components/CardLayout/index'

function App() {
  return (
    <div className="App">
      <input type="text" name="search" placeholder="Search..."></input>  
    <div className="grid">
      <CardLayout/>
    </div>
    </div>
  );
}

export default App;
