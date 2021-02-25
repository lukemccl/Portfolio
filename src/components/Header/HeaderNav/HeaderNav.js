import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import '../header.scss';

export default class HeaderNav extends Component {
  state = { activeItem: this.getStartPage() }

  getStartPage() {
    return window.location.href.split('/')[3]
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
        <Menu inverted pointing secondary>
          <Menu.Item className="headerMenuItem"
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}  to='/home'
          />
          <Menu.Item className="headerMenuItem"  
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
            as={Link}  to='/projects'
          />
          <Menu.Item className="headerMenuItem"  
            name='passions'
            active={activeItem === 'passions'}
            onClick={this.handleItemClick}
            as={Link}  to='/passions'
          />
          <Menu.Item className="headerMenuItem"  
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            as={Link}  to='/contact'
          />
        </Menu>
    )
  }
}