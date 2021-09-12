import HoverDisplay from '../../components/HoverDisplay/HoverDisplay'
import Section from '../../components/Section/section'
import { Grid } from '@material-ui/core'
import '../../styles.scss'

import Websitemp4 from '../../resources/videos/website.mp4'
import GymFormCheckmp4 from '../../resources/videos/diss.mp4'
import MountainCarmp4 from '../../resources/videos/mountaincar.mp4'
import CancerDiagrampng from '../../resources/imgs/cancer.png'

const Projects = () => {
    
    return(
        <section id="projects-item">
            <a className="anchor" id="projects"></a>
            <Section 
                title="Projects"
                color="white"
            />
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={6} className="bigGrid">
                <Grid item className="hoverDisplay">
                    <HoverDisplay 
                        title="Gym Form Check"
                        background={GymFormCheckmp4}
                        desc="A Computer Vision project to classify correct form in gym."
                        link="https://github.com/lukemccl/GymFormCheck"
                        onHover='video'
                        textColor='#FFFFFF'/>
                </Grid>
                <Grid item className="hoverDisplay">
                    <HoverDisplay
                        title="Cancer exploration"
                        background={CancerDiagrampng}
                        desc = "An exploration using machine learning techniques of the genetic structure of cancers."
                        link = "https://github.com/lukemccl/CancerExploration"
                        onHover = 'img'/>
                </Grid>
                <Grid item className="hoverDisplay">
                    <HoverDisplay
                        title= "This website"
                        background={Websitemp4}
                        desc = "This website, which is built using React.JS and deployed using GitHub Pages."
                        link = "https://github.com/lukemccl/lukemccl.github.io"
                        onHover='video'
                        textColor = '#FFFFFF'/>
                </Grid>
                <Grid item className="hoverDisplay" >
                    <HoverDisplay
                        title="ML Labs"
                        background={MountainCarmp4}
                        desc="A series of Reinforcement Learning and Deep Learning labs completed in my final year"
                        link="https://github.com/lukemccl/ML-Labs"
                        onHover="video"/>
                </Grid>
                <Grid item className="hoverDisplay" >
                    <HoverDisplay
                        title="Used Cars ML"
                        desc=""
                        link=""
                        onHover="img"/>
                </Grid>
                <Grid item className="hoverDisplay" >
                    <HoverDisplay/>
                </Grid>
            </Grid>
        </section>
    )
}

export default Projects;