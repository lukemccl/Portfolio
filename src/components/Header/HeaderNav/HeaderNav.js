import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class HeaderNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
        <Menu  inverted pointing secondary>
          <Menu.Item           
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link}  to='/home'
          />
          <Menu.Item 
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
            as={Link}  to='/projects'
          />
          <Menu.Item 
            name='passions'
            active={activeItem === 'passions'}
            onClick={this.handleItemClick}
            as={Link}  to='/passions'
          />
          <Menu.Item 
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            as={Link}  to='/contact'
          />
        </Menu>
    )
  }
}