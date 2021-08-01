import { Grid } from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons';
import '../../styles.scss'
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () =>{
  return (
    <Grid className="header" container direction='row' justifyContent='space-between' alignItems='center'>
      <Grid item>
        <div className="nameBar"> Luke McClure</div>
      </Grid>
      <Grid item>
        <HeaderNav location={window.location.href}/>
      </Grid>
      <Grid item>
        <a href="https://github.com/lukemccl" className="headerLinksIcon"> 
          <GitHub fontSize='large'/>
        </a>
        <a href="https://www.linkedin.com/in/luke-mcclure/" className="headerLinksIcon">  
          <LinkedIn fontSize='large'/>
        </a>
      </Grid>
    </Grid>
  )
}

export default Header;
