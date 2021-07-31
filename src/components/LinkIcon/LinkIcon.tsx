import { Icon, SemanticICONS } from 'semantic-ui-react'
import './LinkIcon.scss'

interface IconProps {
  name: SemanticICONS,
  body?: string,
  link?: string
}

const linkIcon = (props: IconProps) => {
    
  return (
    props.link
    ? <a className='ui icon link' href={props.link}>
        <Icon
          name={props.name}
          size='huge'
          link
        />
        <br/>
        {props.body}
      </a>
    : <div className='ui icon container'>
        <Icon
          name={props.name}
          size='huge'
          link
        />
        <br/>
        {props.body}
      </div>
    );
}

export default linkIcon;
