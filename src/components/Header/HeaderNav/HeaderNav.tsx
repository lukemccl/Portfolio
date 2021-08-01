import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import '../header.scss';

interface HeaderNavProps {
  location: string
}

const HeaderNav = (props: HeaderNavProps) => {

  function getActiveItem() {
    let urlbreakdown = props.location.split('/')
    return ''// urlbreakdown[3].length>0 ? urlbreakdown[3] : 'home'
    //temporarily break active item while trying to find solution
  }

  return (
    <Menu secondary inverted stackable>
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