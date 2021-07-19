import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import '../header.scss';

const HeaderNav = () => {

  function getActiveItem() {
    let urlbreakdown = window.location.href.split('/')
    return urlbreakdown[3].length>0 ? urlbreakdown[3] : 'home'
  }

  return (
      <Menu inverted pointing secondary>
        <Menu.Item className="headerMenuItem"
          name='home'
          active={getActiveItem() === 'home'}
          as={Link}  to='/home'
        />
        <Menu.Item className="headerMenuItem"  
          name='projects'
          active={getActiveItem()  === 'projects'}
          as={Link}  to='/projects'
        />
        <Menu.Item className="headerMenuItem"  
          name='passions'
          active={getActiveItem() === 'passions'}
          as={Link}  to='/passions'
        />
        <Menu.Item className="headerMenuItem"  
          name='contact'
          active={getActiveItem() === 'contact'}
          as={Link}  to='/contact'
        />
      </Menu>
    )
}

export default HeaderNav;