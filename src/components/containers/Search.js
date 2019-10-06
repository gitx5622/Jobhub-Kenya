import React,{Component} from 'react';

class Search extends Component {

    constructor(props) {
      super(props);
      this.state = {
        value: 'coconut',
        data: ['jay','mbogi','kageorges']
    };

  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
   
    render() {

      return (
        <form onSubmit={this.handleSubmit} style={{marginTop:'100px'}}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <br></br>
           Loop through an Array:
            <select>
              {this.state.data.map(dat=>(
                <option key={dat} value={dat}>{dat}</option>
              ))}
            </select>
            
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default Search;

