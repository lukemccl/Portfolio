import '../../styles.scss'

interface SectionProps {
  title: string,
  body?: string,
  color: string
}

const Section = (props: SectionProps) => {

  return (
    <div className="sectionBackground" style={{backgroundColor: props.color ? props.color : '#c9cdd4'}}>
      <p className="sectionTitle"> {props.title} </p>
      <p className="sectionBody" > {props.body}  </p>
    </div>
  )
}

export default Section;
