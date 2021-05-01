// import logo from './logo.svg';
import './App.css';
import './components/Box.css';
import React, {useState} from 'react';

// import appImage from './assets/images/app-proposed-image.jpg';
import CardLayout from './components/CardLayout/index'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const grid = "grid";
  return (
    <div className="App">
      <input type="text" name="search" placeholder="Search..." onChange={(event) => {
        setSearchTerm(event.target.value)
      }}></input>  
    <div className={grid}>
      <CardLayout search={searchTerm}/>
    </div>
    </div>
  );
}

export default App;
