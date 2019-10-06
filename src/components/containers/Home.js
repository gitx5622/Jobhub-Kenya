import React, {Component} from 'react'
import  axios from 'axios';
import '../css/Home.css';
import {jobListURL} from '../../constants';


class Home extends Component {
  constructor(props) {
    super(props)

    this.handleShowMore = this.handleShowMore.bind(this)

  this.state = {
    data: [],
    showItems : 6
   };

  }

 componentDidMount() {
     axios
       .get(jobListURL)
       .then(res => {
         this.setState({ data: res.data});
       })
   } 
   
   handleShowMore() {
    this.setState({
      showItems: 
        this.state.showItems >= this.state.data.length ?
          this.state.showItems : this.state.showItems + 1
    })
  }

    render(){
      const data = this.state.data.slice(0, this.state.showItems);
        return(
          <div>
    <div id="container">
     <header>
    
    </header> 
    <h1 style={{color:"white",position: "absolute", marginTop:'-300px',marginLeft:'80px',
     fontFamily: 'EB Garamond, serif', fontSize:"74px" }}>Looking for Jobs ?<br></br>
     This is the place to be</h1>

          <a class="btn btn-primary btn-bg" href="/jobs" role="button" 
          style={{color: "white",fontFamily: 'EB Garamond, serif',position: "absolute",
          marginTop:'-100px',marginLeft:'150px'}}>Explore Jobs</a>
          <a class="btn btn-primary btn-bg" href="/signup" role="button"
            style={{color: "white",fontFamily: 'EB Garamond, serif',position: "absolute",
          marginTop:'-100px',marginLeft:'300px' }}>Join us Today</a>
        
    <div className="container"><br></br>
    <h1>Latest Jobs</h1>
  <div className="row">
{data.map(dat=> { return (
<div key={dat.title} className="col-md-4" style={{marginBottom:"30px"}} >
    <div  className="card">
  <div className="card-header"style={{backgroundColor:"#80d8ff",cursor: 'all-scroll'}} onClick={() =>
                      this.props.history.push(`/api/${dat.id}`)
                    }>
    <strong>{dat.title}</strong>
  </div>
  <div className="card-body">
    <h5 className="card-title"><strong>Requirements</strong></h5>
    <p className="card-text" style={{height:'150px', whiteSpace: "pre-line",overflow: "hidden"}}>{dat.requirements}</p>
  </div>
  </div>
    </div>

)})}
  </div>
</div>
</div>
<footer id="sticky-footer" className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; JobHub Kenya</small>
    </div>
  </footer>
 </div>
        )
    }
}  
 export default Home;