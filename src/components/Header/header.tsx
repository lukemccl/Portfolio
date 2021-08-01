import { Grid, Icon, Segment, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import'./header.scss'

interface HeaderProps {
  location: string
}

const Header = (props: HeaderProps) =>{

  function getActiveItem() {
    let urlbreakdown = props.location.split('/')
    return urlbreakdown[3].length>0 ? urlbreakdown[3] : 'home'
  }

  return (
    <Segment inverted>
      <Menu inverted horizontal secondary pointed stackable>
      <Grid columns={6} container>
        <Grid.Row >
          <Grid.Column>
              <div className="nameBar verticalCenter">Luke McClure</div>
          </Grid.Column>
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
          <Grid.Column className='linksBar'>
            <Segment inverted >
              <a href="https://github.com/lukemccl" className='links'> 
                <Icon 
                  name='github'
                  size='big'
                  color='grey'
                />
              </a>
              <a href="https://www.linkedin.com/in/luke-mcclure/"  className='links'>  
                <Icon 
                  name='linkedin'
                  size='big'
                  color='grey'
                />
              </a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Menu>
    </Segment>
  )
}

export default Header;
