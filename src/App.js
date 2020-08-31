import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Memes from './components/Memes.js';


import {v4 as uuidv4} from 'uuid';

class App extends React.Component {

  state = {
    memes: [
      {
        id: uuidv4(),
        image_url: "/demo-images/triss.png",
        source: "1.fola.com",
        category: "hair growth",
        tags: ["hair", "natural hair", "hair growth", "black hair"]
      },
      {
        id: uuidv4(),
        image_url: "file:///C:/xampp/htdocs/react_crash_todo/src/demo-images/triss.png",
        source: "2.fola.com",
        category: "simps",
        tags: ["simping men", "simp", "pretty lady"]
      },
      {
        id: uuidv4(),
        image_url: "./demo-images/triss.png",
        source: "3.fola.com",
        category: "relationship",
        tags: ["heart break", "women are scum", "love yourself"]
      },
      {
        id: uuidv4(),
        image_url: "./demo-images/triss.png",
        source: "4.fola.com",
        category: "hair growth",
        tags: ["hair", "natural hair", "hair growth", "black hair"]
      },
      {
        id: uuidv4(),
        image_url: "./demo-images/triss.png",
        source: "5.fola.com",
        category: "hair growth",
        tags: ["hair", "natural hair", "hair growth", "black hair"]
      }
    ]
  }


 render(){
    return (
        <div className="App">
          <Header />
          <Memes memes={this.state.memes}/>  
        </div>
    );
  }
  
}



export default App;
