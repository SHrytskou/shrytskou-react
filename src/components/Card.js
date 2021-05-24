import React from "react";

import './Card.css'

class Card extends React.Component {
	constructor(props) {
	  super(props)
	  this.output = this.output.bind(this);
	  this.state = {
		divName: 'card'
	  }
	}
	
	output() {
	  if(this.state.divName === 'card'){
		this.setState({divName: 'card-item'});
	  }
	  if(this.state.divName === 'card-item'){
		this.setState({divName: 'card'});
	  }
	  
	}
   
	render() {
	  return(
		<div className={this.state.divName}>
		 <div className={'card-inner__caption'}>
		   <h3 className="card-caption">Card Title</h3>
		   <input type="checkbox" onChange={this.output} />
		 </div>
  
		 <hr></hr>
  
		 <div>
		   <p>Some Text</p>
		 </div>
	   </div>
	  )
	}  
}

export default Card;