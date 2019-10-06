import React, {Component} from 'react'
import  axios from 'axios';
import {jobDetailURL} from '../../constants'
import '../css/DetailView.css';
import CustomForm from './ApplyForm';

class DetailView extends Component {

  state = {
    data: []
  };

componentDidMount() {
    this.handleFetchItem();
  }

  handleFetchItem = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(jobDetailURL(params.jobID))
      .then(res => {
        this.setState({ data: res.data });
      })
      
      
  };
render(){
      const {data} = this.state;
      const item = data;
        return(
    <div className="container">
    <div className="row" style={{marginTop: '50px'}}>
    <div className="col-8"> 
       <div className="card">
            <div className="card-header">
             <h2 style={{color: '#3EB6B2'}}>{item.title}</h2> 
            </div>
            <div className="card-body">
              <h3 className="card-title">{item.company}</h3>
              <label>Skills</label>
              <div style={{marginTop: '5px'}}>
              <button type="button" className="btn btn-info"style={{marginTop: '5px'}}>{item.type_of_job }</button>
              <button type="button" className="btn btn-info"style={{marginTop: '5px',marginLeft: '15px'}}>Industry : {item.indusrty}</button><br></br>
              <button type="button" className="btn btn-info"style={{marginTop: '5px'}}>Experience : {item.experience_level}</button><br></br>
              <button type="button" className="btn btn-info"style={{marginTop: '5px'}}>No of Experience : {item.experience_time}</button><br></br>
              <button type="button" className="btn btn-info"style={{marginTop: '5px'}}>Salary : {item.salary}</button><br></br>
              <button type="button" className="btn btn-info"style={{marginTop: '5px'}}>Date Posted : {item.date_created}</button>
              </div>
             <h3>Description</h3>
              <p className="card-text">{item.description}</p>
              <h3>Requirements</h3>
              <div>
              <p>{item.requirements}</p>
              </div>
             

              <a href="badges.html" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
   
    </div>
    <div className="col-4">
      <h2>Apply Here</h2>
      <CustomForm 
      requestType="post"
      applyjobID ={null}
      btnText = "Create" />
    </div>
  </div>
  </div>
        )
    }
}  
 export default DetailView;