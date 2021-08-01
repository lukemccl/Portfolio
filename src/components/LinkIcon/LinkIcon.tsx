import { Icon, SemanticICONS } from 'semantic-ui-react'
import '../../styles.scss'

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
    <div className="expandingLinksIcon">
      {props.link
      ? <a className='ui icon link' href={props.link}>
          {icon}
          <br/>
          {props.body}
        </a>
      : <div>
          {icon}
          <br/>
          {props.body}
        </div>}
    </div>
    
    );
}

export default linkIcon;
