import Section from '../../components/Section/section'

const About = () => {
    
    const homeSectionHeader = "Home"
    const homeSectionBody = "This is the landing page for my personal website, very much still a work in progress!"
    
    return(
        <section id="about-item">
            <a className="anchor" id="about"></a>
            <Section title={homeSectionHeader} body={homeSectionBody} color="white"/>
        </section>
    )
}

export default About;