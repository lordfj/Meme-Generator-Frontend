import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Memes from './components/Memes.js';
import Hair1 from './demo-images/hair-1.jpg';
import Hair2 from './demo-images/hair-2.jpg';
import Hair3 from './demo-images/hair-3.jpg';
import HeartBreak1 from './demo-images/heartbreak-1.jpg';
import HeartBreak2 from './demo-images/heartbreak-2.jpg';
import HeartBreak3 from './demo-images/heartbreak-3.jpg';
import HeartBreak4 from './demo-images/heartbreak-4.jpeg';
import Simp1 from './demo-images/simp-1.jpg';
import Simp2 from './demo-images/simp-2.jpg';
import Simp3 from './demo-images/simp-3.jpg';





import {v4 as uuidv4} from 'uuid';

class App extends React.Component {

  state = {
    memes: [
      {
        id: uuidv4(),
        image_url: Hair1,
        source: "1.fola.com",
        category: "hair growth",
        tags: ["hair", "natural hair", "hair growth", "black hair"]
      },
      {
        id: uuidv4(),
        image_url: Hair2,
        source: "1.fola.com",
        category: "hair growth",
        tags: ["hair", "natural hair", "hair growth", "black hair"]
      },
      {
        id: uuidv4(),
        image_url: Hair3,
        source: "1.fola.com",
        category: "hair growth",
        tags: ["hair", "natural hair", "hair growth", "black hair"]
      },
      {
        id: uuidv4(),
        image_url: HeartBreak1 ,
        source: "2.fola.com",
        category: "simps",
        tags: ["simping men", "simp", "pretty lady"]
      },
      {
        id: uuidv4(),
        image_url: HeartBreak2 ,
        source: "2.fola.com",
        category: "simps",
        tags: ["simping men", "simp", "pretty lady"]
      },
      {
        id: uuidv4(),
        image_url: HeartBreak3 ,
        source: "2.fola.com",
        category: "simps",
        tags: ["simping men", "simp", "pretty lady"]
      },
      {
        id: uuidv4(),
        image_url: HeartBreak4,
        source: "3.fola.com",
        category: "relationship",
        tags: ["heart break", "women are scum", "love yourself"]
      },
      {
        id: uuidv4(),
        image_url: Simp1,
        source: "3.fola.com",
        category: "relationship",
        tags: ["heart break", "women are scum", "love yourself"]
      },
      {
        id: uuidv4(),
        image_url: Simp2,
        source: "3.fola.com",
        category: "relationship",
        tags: ["heart break", "women are scum", "love yourself"]
      },
      {
        id: uuidv4(),
        image_url: Simp3,
        source: "3.fola.com",
        category: "relationship",
        tags: ["heart break", "women are scum", "love yourself"]
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
