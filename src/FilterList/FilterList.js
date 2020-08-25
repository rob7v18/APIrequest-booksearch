import React, { Component } from 'react'; 


class FilterList extends Component{
    render(){
        
        return(
            <div className= "FilterList">
                <label htmlFor="PrintType">Print Type:</label>
                <select id="selectNumber">
                    <option value="1" >All</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <label htmlFor="BookType">Book Type:</label>
                <select id="selectNumber">
                    <option value="1">No Filter</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
               
            </div>
        );
    }
}


export default FilterList;