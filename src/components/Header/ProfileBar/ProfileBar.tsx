import { Segment, Grid } from "semantic-ui-react"
import './ProfileBar.scss'

const ProfileBar = () => {
    return (
        <Segment className='ProfileBar' inverted>
              <Grid columns={1}>
                {/* <Grid.Column>
                  {/* <img className="profilePic ui image"src="https://avatars.githubusercontent.com/u/32748875" alt="GitHub Profile"/> */}
                {/*</Grid></Grid.Column> */}
                <Grid.Column>
                </Grid.Column>
              </Grid>
            </Segment>
    )
}

export default ProfileBar