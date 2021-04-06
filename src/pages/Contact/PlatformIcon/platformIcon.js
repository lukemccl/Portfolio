import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './platformIcon.scss'

class PlatformIcon extends Component{

  render(){
    const inner = 
    <div className="sectionBackground" style={{backgroundColor: this.props.color ? this.props.color : '#e4e7ed'}}>
        <img className="platformIcon" src={this.props.imgSource}/>
        <p>{this.props.name}</p>
    </div>
    return this.props.link ? 
      <a href={this.props.link}>
        {inner}
      </a>
      :
      <div>
        {inner}
      </div>
  }
}

export default PlatformIcon;
