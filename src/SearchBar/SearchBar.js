import React, {Component} from 'react'; 
 
class SearchBar extends Component{
  handleChange = (e) => {
    this.props.value(e.target.value)
  }
 
  render(){
      return(
            <div className="SearchBar">
              <span> 
                <input 
                    name= "searchTerm"
                    placeholder= {this.props.searchTerm}
                    onChange={this.handleChange}
                    />
              </span>      
            </div>
        );
    }
}
 
export default SearchBar;