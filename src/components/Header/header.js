import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react'
import HeaderNav from "./HeaderNav/HeaderNav"
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './header.scss';
import LinkedIn from './linkedIn.svg';
import GitHub from './github.svg'
import Profile from "../../userpic.jpg"

export default class Header extends Component{
  render(){
    return(
      <Segment className = {styles.headerBar} inverted>
        <div class="ui middle aligned centred equal width grid">
          <div class="three column centered row">
            <div class="left aligned column">
              <img src={Profile} alt="Profile" style={{width : '75px', height : '75px', borderRadius: '50%', paddingRight: "5px"}}/>
              Luke McClure
            </div>
            <div class="right aligned column">
              <HeaderNav/>
            </div>
            <div class="right aligned column">
              <ul style={{listStyleType: "none"}}>
                <li>
                  <a href="https://github.com/lukemccl"  class="ui image">
                    <img src={GitHub} alt="GitHub"/>
                  </a>
                </li>
                <li style={{paddingTop: "2px"}}>
                  <a href="https://www.linkedin.com/in/luke-mcclure/" class="ui image">
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