import Section from '../../components/Section/section'
import LinkIcon from '../../components/LinkIcon/LinkIcon'

import { Grid, Segment, Header } from 'semantic-ui-react'

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
            <Grid stackable >
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Segment raised>
                            <Header attached='top' size='huge'>Business</Header>
                            <p>For any business enquiries I am available on these platforms:</p>
                            <Grid stackable>
                                <Grid.Row columns={2}>
                                    <Grid.Column>{LinkedInPlatform}</Grid.Column>                    
                                    <Grid.Column>{EmailPlatform}</Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>  
                </Grid.Row>              
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Segment raised>
                            <Header attached='top' size='huge'>Personal</Header>
                            <p>For keeping up with my hobbies and passions, continue to check this site or check me out on any of these platforms:</p>
                            <Grid stackable>
                                <Grid.Row columns={2}>
                                    <Grid.Column>{InstaPlatform}</Grid.Column>                    
                                    <Grid.Column>{GHPlatform}</Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>  
                </Grid.Row> 
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Segment raised>
                        <Header attached='top' size='huge'>Further</Header>
                    <p>Available on request:</p>
                            <Grid stackable>
                                <Grid.Row columns={2}>
                                    <Grid.Column>{PhonePlatform}</Grid.Column>                    
                                    <Grid.Column>{CVPlatform}</Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>  
                </Grid.Row> 
            </Grid>
            <footer>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>
    );
}

export default Contact;