import HoverDisplay from '../../components/HoverDisplay/HoverDisplay'
import { Grid } from '@material-ui/core'
import '../../styles.scss'

import Websitemp4 from '../../resources/videos/website.mp4'
import GymFormCheckmp4 from '../../resources/videos/diss.mp4'
import CancerDiagrampng from '../../resources/imgs/cancer.png'

const Projects = () => {
    
    return(
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4} >
            <Grid item className="hoverDisplay">
                <HoverDisplay 
                        title="Gym Form Check"
                        background= {GymFormCheckmp4}
                        desc = "A Computer Vision project to classify correct form in gym."
                        link = "https://github.com/lukemccl/GymFormCheck"
                        onHover = 'video'
                        textColor = '#FFFFFF'/>
            </Grid>
            <Grid item className="hoverDisplay">
                <HoverDisplay
                        title="Cancer exploration"
                        background= {CancerDiagrampng}
                        desc = "An exploration using machine learning techniques of the genetic structure of cancers."
                        link = "https://github.com/lukemccl/CancerExploration"
                        onHover = 'img'/>
            </Grid>
            <Grid item className="hoverDisplay">
                <HoverDisplay
                        title= "This website"
                        background = {Websitemp4}
                        desc = "This website, which is built using React.JS and deployed using GitHub Pages."
                        link = "https://github.com/lukemccl/lukemccl.github.io"
                        onHover='video'
                        textColor = '#FFFFFF'/>
            </Grid>
            <Grid item className="hoverDisplay" xs={3}>
                <HoverDisplay/>
            </Grid>
            <Grid item className="hoverDisplay" xs={3}>
                <HoverDisplay/>
            </Grid>
            <Grid item className="hoverDisplay" xs={3}>
                <HoverDisplay/>
            </Grid>
        </Grid>
    )
}

export default Projects;