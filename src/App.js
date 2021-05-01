// import logo from './logo.svg';
import './App.css';
import './components/Box.css';
import React, {useState} from 'react';

// import appImage from './assets/images/app-proposed-image.jpg';
import CardLayout from './components/CardLayout/index'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortData, setSortData] = useState(false);

  const grid = "grid";
  
  return (
    <div className="App App-background">
      <h3 className="mt-3 mb-3 App-header">Employee Directory</h3>
      <input type="text" name="search" placeholder="Search..." onChange={(event) => {
        setSearchTerm(event.target.value);
      }}></input>  
      {/* <button className="btn button border ml-2 border-secondary rounded-lg" onClick={setSortData(true)}><i className="fas fa-sort-alpha-down"></i></button> */}
    <div className={grid}>
      <CardLayout search={searchTerm} sort={sortData}/>
    </div>
    </div>
  );
}

export default App;
