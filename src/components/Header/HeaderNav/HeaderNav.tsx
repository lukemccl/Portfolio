import { Grid, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import '../header.scss';

interface HeaderNavProps {
  location: string
}

const HeaderNav = (props: HeaderNavProps) => {

  function getActiveItem() {
    let urlbreakdown = props.location.split('/')
    return urlbreakdown[3].length>0 ? urlbreakdown[3] : 'home'
  }

  return (
    <div>
      <Grid.Column className='menuBar verticalCenter'>
            <Menu.Item className="headerMenuItem"
              name='home'
              active={getActiveItem() === 'home'}
              as={Link}  to='/home'
            />
          </Grid.Column>
          <Grid.Column className='menuBar verticalCenter'>
            <Menu.Item className="headerMenuItem"  
            name='projects'
            active={getActiveItem()  === 'projects'}
            as={Link}  to='/projects'
            />
          </Grid.Column>
          <Grid.Column className='menuBar verticalCenter'>
            <Menu.Item className="headerMenuItem"  
              name='passions'
              active={getActiveItem() === 'passions'}
              as={Link}  to='/passions'
            />
          </Grid.Column>
          <Grid.Column className='menuBar verticalCenter'>
            <Menu.Item className="headerMenuItem"  
              name='contact'
              active={getActiveItem() === 'contact'}
              as={Link}  to='/contact'
            />
          </Grid.Column>
    </div>
    )
}

export default HeaderNav;