import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './contactSection.scss'

class ContactSection extends Component{

  render(){
    console.log(this.props.platforms)
    return(
      
      <div className="sectionBackground" style={{backgroundColor: this.props.color ? this.props.color : '#e4e7ed'}}>
        <header>
            <p className="sectionTitle">{this.props.title}</p>
            <p>{this.props.body}</p>
        </header>
        <row className="container">
            {this.props.platforms}
        </row>
      </div>
    )
  }
}

export default ContactSection;
