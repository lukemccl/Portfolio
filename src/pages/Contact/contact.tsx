import Section from '../../components/Section/section'
import ContactSection from './ContactSection/contactSection'

import linkedin from '../../resources/linkedin.svg'
import email from '../../resources/email.svg'
import instagram from '../../resources/instagram.svg'
import github from '../../resources/github.svg'
import smartphone from '../../resources/smartphone.svg'
import cv from '../../resources/cv.svg'
import HoverDisplay from '../../components/HoverDisplay/HoverDisplay'

const Contact = () => {

    const LinkedInPlatform = <HoverDisplay 
                                title="LinkedIn"
                                background={linkedin}
                                link="https://www.linkedin.com/in/luke-mcclure/"
                                onHover='img'/>
    const EmailPlatform    = <HoverDisplay 
                                title="lukemcclure71@gmail.com"
                                background={email}
                                link="mailto:lukemcclure71@gmail.com"
                                onHover='img'/>
    const InstaPlatform    = <HoverDisplay
                                title="Instagram"
                                background={instagram}
                                link="https://www.instagram.com/l.mccl/"
                                onHover='img'/>
    const GHPlatform       = <HoverDisplay 
                                title="GitHub"
                                background={github}
                                link="https://github.com/lukemccl"
                                onHover='img'/>        
    const PhonePlatform    = <HoverDisplay
                                title="Phone"
                                background={smartphone}
                                onHover='img'/>
    const CVPlatform       = <HoverDisplay
                                title="CV"
                                background={cv}
                                onHover='img'/>

    const businessPlatforms = [LinkedInPlatform, EmailPlatform]
    const personalPlatforms = [InstaPlatform, GHPlatform]
    const otherPlatforms    = [PhonePlatform, CVPlatform]

    return(
        <div>
            <Section title="There are several ways to get in contact with me, feel free to reach out on one of the platforms listed!" color="white"/>
            <ContactSection title="Business" body="For any business enquiries I am available on these platforms:" platforms={businessPlatforms}/> 
            <ContactSection title="Personal" body="For keeping up with my hobbies and passions, continue to check this site or check me out on any of these platforms:" platforms={personalPlatforms}/>
            <ContactSection title="Further" body="Available on request:" platforms={otherPlatforms}/>
            <footer>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>
            
    )
    
}

export default Contact;