import Section from '../../components/Section/section'
import LinkIcon from '../../components/LinkIcon/LinkIcon'

import { Header } from 'semantic-ui-react'
import { Grid, Paper } from '@material-ui/core'

const Contact = () => {

    const LinkedInPlatform = <LinkIcon
                                name='linkedin'                                
                                body='LinkedIn'
                                link='https://www.linkedin.com/in/luke-mcclure/'/>
    const EmailPlatform =   <LinkIcon
                                name='envelope'
                                body='lukemcclure71@gmail.com'
                                link='mailto:lukemcclure71@gmail.com'/>
    const InstaPlatform    = <LinkIcon
                                name='instagram'
                                body='Instagram'
                                link='https://www.instagram.com/l.mccl/'/>
    const GHPlatform       = <LinkIcon
                                name='github square'
                                body='GitHub'
                                link='https://github.com/lukemccl'/>        
    const PhonePlatform    = <LinkIcon
                                name='phone square'
                                body='Phone'/>
    const CVPlatform       = <LinkIcon
                                name='file alternate outline'
                                body='CV'/>

    return(
        <div>
            <Section title="There are several ways to get in contact with me, feel free to reach out on one of the platforms listed!" color="white"/>
            <Grid container direction='column' justifyContent='space-around' alignItems='center'>
                <Grid item className="contactsCard">
                        <Paper elevation={5} className="paperStack">
                            <Header attached='top' size='huge'>Business</Header>
                            <p>For any business enquiries I am available on these platforms:</p>
                            <Grid container justifyContent='center' alignItems='center'>
                                <Grid item>{LinkedInPlatform}</Grid>                    
                                <Grid item>{EmailPlatform}</Grid >
                            </Grid>
                        </Paper>
                </Grid>            
                <Grid item className="contactsCard">
                    <Paper elevation={5}  className="paperStack">
                            <Header attached='top' size='huge'>Personal</Header>
                            <p>For keeping up with my hobbies and passions, <br/> continue to check this site or check me out on any of these platforms:</p>
                            <Grid container justifyContent='center' alignItems='center'>
                                    <Grid item>{InstaPlatform}</Grid>                    
                                    <Grid item>{GHPlatform}</Grid>
                            </Grid>
                        </Paper>
                </Grid>
                <Grid item className="contactsCard">
                    <Paper elevation={5} className="paperStack">
                        <Header attached='top' size='huge'>Further</Header>
                        <p>Available on request:</p>
                        <Grid container justifyContent='center' alignItems='center'>
                            <Grid item>{PhonePlatform}</Grid>                    
                            <Grid item>{CVPlatform}</Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;