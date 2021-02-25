import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react'
import HeaderNav from "./HeaderNav/HeaderNav"
import 'bootstrap/dist/css/bootstrap.min.css';

import'./header.scss'
import LinkedIn from './linkedIn.svg';
import GitHub from './github.svg'
import Profile from "../../userpic.jpg"

export default class Header extends Component{
  render(){
    return(
      <Segment inverted>
        <div className="ui middle aligned grid">
          <div className="three column centered row">
            <div className="left aligned column">
              <div className="profileBar"> 
                <img className="profilePic ui image"src={Profile} alt="Profile picture"/>
                <div className="nameBar">Luke McClure</div>
              </div>
            </div>
            <div className="right aligned column" style={{paddingLeft:"5.6vw"}}>
              <HeaderNav/>
            </div>
            <div className="right aligned column">
              <ul className="linksList">
                <li>
                  <a href="https://github.com/lukemccl"  className="ui image" style={{paddingRight:"0px"}}>
                    <img src={GitHub} alt="GitHub"/>
                  </a>
                </li>
                <li style={{paddingTop: "2px"}}>
                  <a href="https://www.linkedin.com/in/luke-mcclure/" className="ui image">
                    <img src={LinkedIn} alt="LinkedIn"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Segment>
    )
  }
}