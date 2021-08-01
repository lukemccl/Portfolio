import { Icon, SemanticICONS } from 'semantic-ui-react'
import './LinkIcon.scss'

interface IconProps {
  name: SemanticICONS,
  body?: string,
  link?: string
}

const linkIcon = (props: IconProps) => {
    
  const icon = (
    <Icon
      name={props.name}
      size='huge'
      link
      color='black'
    />
  );
  return (
    props.link
    ? <a className='ui icon link' href={props.link}>
        {icon}
        <br/>
        {props.body}
      </a>
    : <div className='ui icon container'>
        {icon}
        <br/>
        {props.body}
      </div>
    );
}

export default linkIcon;
