import { Menu } from 'semantic-ui-react'
import { GitHub, LinkedIn } from '@material-ui/icons';

const Header = () => {

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('a.item.headerMenuItem');
    let activeItem = '';

    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= (sectionTop - sectionHeight / 4)) {
        activeItem = section.id;
      }
    });

    menuItems.forEach( menuItem => {
      menuItem.classList.remove('active');
      if(menuItem.classList.contains(activeItem)){
        menuItem.classList.add('active');
      }
    });
  });

  return (
    <Menu 
      className="header" 
      fixed="top" 
      inverted borderless stackable>
      
      <Menu.Menu 
        className="nameBar" 
        inverted position="left">

        <Menu.Item >
          Luke McClure
        </Menu.Item>
      </Menu.Menu>
      
      <Menu 
        className="navBar" 
        floated="right" 
        activeIndex={2}
        secondary inverted pointing>

        <Menu.Item className="active about-item headerMenuItem"
          name='about'
          href='#about'
        />
        <Menu.Item className="projects-item headerMenuItem"  
          name='projects'
          href='#projects'
        />
        <Menu.Item className="passions-item headerMenuItem"  
          name='passions'
          href='#passions'
        />
        <Menu.Item className="contact-item headerMenuItem"  
          name='contact'
          href='#contact'
        />
      </Menu>

      <Menu.Menu 
        inverted borderless position="right">

        <Menu.Item 
          name='GitHub'
          icon={true} 
          link={true}
          href='https://github.com/lukemccl'
          className="headerLinksIcon"
        >
          <GitHub fontSize='large'/>
        </Menu.Item>
        <Menu.Item 
          name='LinkedIn'
          icon={true} 
          link={true}
          href='https://www.linkedin.com/in/luke-mcclure/'
          className="headerLinksIcon"
        >
          <LinkedIn fontSize='large'/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    )
}

export default Header;