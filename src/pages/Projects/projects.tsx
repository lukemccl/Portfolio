import HoverDisplay from '../../components/HoverDisplay/HoverDisplay'

import ThisWebsitemp4 from '../../resources/videos/website.mp4'
import * as styles from './projects.scss'

const Projects = () => {
    
    return(
        <div className={styles.gridcontainer}>
            <HoverDisplay 
                title="Gym Form Check"
                desc = "A Computer Vision project to classify correct form in gym."
                link = "https://github.com/lukemccl/GymFormCheck"
                onHover = 'video'/>
            <HoverDisplay
                title="Cancer exploration"
                desc = "An exploration using machine learning techniques of the genetic structure of cancers."
                link = "https://github.com/lukemccl/CancerExploration"/>
            <HoverDisplay
                title="something lol"
                desc = ""
                link = ""/>
            <HoverDisplay
                title= "This website"
                background = {ThisWebsitemp4}
                desc = "This website, which is built using React.JS and deployed using GitHub Pages."
                link = "https://github.com/lukemccl/lukemccl.github.io"/>
            <HoverDisplay/>
            <HoverDisplay/>
        </div>
    )
}

export default Projects;