import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import'./section.scss'

class Section extends Component{

  render(){
    if(this.props.alignment==="lefty"){             //align pics to left, title to right

    }else if(this.props.alignment==="righty"){      //align pics to right, title to left

    }else{                                          //centre align

    }
    return(
      
      <div className="sectionBackground" style={{backgroundColor: this.props.color ? this.props.color : '#c9cdd4'}}>
        <p className="sectionTitle"> {this.props.title} </p>
        <p className="sectionBody" > {this.props.body}  </p>
      </div>
    )
  }
}

export default Section;
