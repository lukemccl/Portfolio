import 'bootstrap/dist/css/bootstrap.min.css';

import './contactSection.scss'

interface SectionProps {
  title: string,
  body: string,
  platforms: Array<any>,
  color?: string
}

const ContactSection = (props: SectionProps) => {
    
  return(
    <div className="sectionBackground" style={{backgroundColor: props.color ? props.color : '#e4e7ed'}}>
      <header>
          <p className="sectionTitle">{props.title}</p>
          <p>{props.body}</p>
      </header>
      <tr className="container">
          {props.platforms}
      </tr>
    </div>
  )
}


export default ContactSection;
