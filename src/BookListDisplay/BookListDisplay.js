import React, { Component } from 'react'; 
// import DisplayItems from '../DisplayItems/DisplayItems';


class BookListDisplay extends Component{
    render(){
        const displayList =  this.props.item.map(item =>
            <div>
              <ul><li>{item.title}</li></ul>
            </div>)
     
        return(
            <div className= "BookListDisplay">
                <h2>Book List</h2>
                {displayList}
            </div>
        );
    }
}

export default BookListDisplay;