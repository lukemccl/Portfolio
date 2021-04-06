import React, {Component} from 'react'
import Section from '../../components/Section/section'
import ContactSection from './ContactSection/contactSection'
import PlatformIcon from './PlatformIcon/platformIcon'

import linkedin from '../../resources/linkedin.svg'
import email from '../../resources/email.svg'
import instagram from '../../resources/instagram.svg'
import github from '../../resources/github.svg'
import smartphone from '../../resources/smartphone.svg'
import cv from '../../resources/cv.svg'

export default class Contact extends Component {
    render() {
        const LinkedInPlatform = <PlatformIcon name="LinkedIn"   imgSource={linkedin}       link="https://www.linkedin.com/in/luke-mcclure/"/>
        const EmailPlatform    = <PlatformIcon name="Email"      imgSource={email}          link="mailto:lukemcclure71@gmail.com"/>
        const InstaPlatform    = <PlatformIcon name="Instagram"  imgSource={instagram}      link="https://www.instagram.com/l.mccl/"/>
        const GHPlatform       = <PlatformIcon name="GitHub"     imgSource={github}      link="https://github.com/lukemccl"/>        
        const PhonePlatform    = <PlatformIcon name="Phone"      imgSource={smartphone}/>
        const CVPlatform       = <PlatformIcon name="CV"         imgSource={cv}/>

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
}