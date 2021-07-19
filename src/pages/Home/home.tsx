import Section from '../../components/Section/section'

const Home = () => {
    
    const homeSectionHeader = "Home"
    const homeSectionBody = "This is the landing page for my personal website, very much still a work in progress!"
    
    return(
        <div>
            <Section title={homeSectionHeader} body={homeSectionBody} color="white"/>
        </div>
    )
}

export default Home;