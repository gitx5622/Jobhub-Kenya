import React, {Component} from 'react'
import  axios from 'axios';
import {jobListURL} from '../../constants';


class ListView extends Component {
  constructor(props) {
    super(props)

  this.state = {
    data: [],
   };

  }

 componentDidMount() {
     axios
       .get(jobListURL)
       .then(res => {
         this.setState({ data: res.data});
       })
   } 
 
    render(){
      const data = this.state.data;
        return(
          <div>
    <div className="container" style={{marginTop:'50px'}}><br></br>
    <h3>All Jobs</h3>
  <div className="row">
{data.map(dat=> { return (
<div key={dat.title} className="col-md-8" style={{marginBottom:'50px'}}>
    <div className="card">
  <div className="card-header" style={{backgroundColor:"#80d8ff"}}>
    {dat.title}
  </div>
  <div className="card-body">
  <h5 className="card-title">Description</h5>
    <p className="card-text">{dat.description}</p>
    <h5 className="card-title">Requirements</h5>
    <p className="card-text">{dat.requirements}</p>
    <button className="btn btn-primary"  onClick={() =>
                      this.props.history.push(`/api/${dat.id}`)
                    }>View job</button>
  </div>
  </div>
    </div>
    
)})}
  <div className="col-md-4">
   
    </div>  
  </div>
</div>
<footer id="sticky-footer" className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Your Website</small>
    </div>
  </footer>
 </div>
        )
    }
}  
 export default ListView;