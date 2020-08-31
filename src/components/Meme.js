import React, { Component } from 'react';
import Triss from '../demo-images/triss.png';


export class Meme extends Component {

    MemeTagsListItems = () => {
        const memeTags = this.props.meme.tags;

        return memeTags.map((tag) => <span>{tag}</span>);
    }

    render() {
        return (
            <div className="meme">
                <div className="meme-img">
                    <img alt="" src={Triss} />
                </div>

                <div className="meme-text">
                    <p>
                        <label>Category:</label> 
                        {this.props.meme.category}
                    </p>

                    <p  className="meme-tags">
                        <label>Tags:</label>
                        {this.MemeTagsListItems()}
                     </p>
                     
                    <a href={this.props.meme.image_url}>View Source</a>                        
                    
                    <p>
                        <label>Share:</label>
                        Whatsapp
                    </p>

                </div>
            </div>
        )
    }
}



export default Meme
