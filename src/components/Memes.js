import React, { Component } from 'react';
import Meme from './Meme.js';

export class Memes extends Component
{

    state = {

        filteredMemes:[ ]
    }

    memeSearch = (e) => {
        // Variable to hold the original version of the meme list
        let originalList = [];
        // Variable to hold the filtered list before putting into state
        let filteredList = [];
    
        // If the search bar isn't empty
        if (e.target.value !== "") {

            // Assign the original meme list to the originalList array
            originalList = this.props.memes;
                
            // Use .filter() to determine which items should be displayed based on the search terms
            filteredList = originalList.filter(meme => {
           
            // change current item to lowercase
            const lc = meme.category.toLowerCase();
            // change search term to lowercase
            const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to filteredList. Using lowercase eliminates issues with capitalization in search terms and search content
            return lc.includes(filter);
            
            });

        } else {
                // If the search bar is empty, set filteredList to original task list
          filteredList = this.props.memes;
        }
            // Set the filtered state based on what our rules added to filteredList
        this.setState({
          filteredMemes: filteredList
        });
    
      }

    componentDidMount() {
        this.setState({
          filteredMemes: this.props.memes
        });
      }
      
      componentWillReceiveProps(nextProps) {
        this.setState({
          filteredMemes: nextProps.memes
        });
      }

      renderMeme = () => {
        return this.state.filteredMemes.map((meme) => (
             <Meme meme={meme} key={meme.id}/>
         ));  
     }

    render()
    {
        return <div className="memes"> 
            <input className="meme-search" onChange={this.memeSearch} name="search" placeholder="Search Meme ..." /> <br/>
            {this.renderMeme()} 
         </div>      
                
    }

}



export default Memes
