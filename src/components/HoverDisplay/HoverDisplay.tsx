import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import '../../styles.scss'

interface DisplayBoxProps {
    title?: string
    background?: any
    desc?: string
    link?: string
    onHover?: 'video' | 'img'
    textColor?: string
}

const HoverDisplay = (props : DisplayBoxProps) => {

    const hoverOn = (event : React.MouseEvent) => {
        if(props.onHover==='video' && props.title){
            const target = document.getElementById(props.title) as HTMLVideoElement
            target.play()
        }
    }

    const hoverOff = (event : React.MouseEvent) => {
        if(props.onHover==='video' && props.title){
            const target = document.getElementById(props.title) as HTMLVideoElement
            target.pause()
        }
    }

    const textContent = () => {
        return (
            <div style={{color: props.textColor ? props.textColor : 'black'}}>
                <h2>{props.title ? props.title : "More coming soon..."}</h2>
                <p>{props.desc}</p>
            </div>
        );
    }

    const backgroundContent = () => {
          if (props.onHover === 'video') {
            return (
                <video 
                    disableRemotePlayback 
                    id={props.title} 
                    loop 
                    muted 
                    playsInline
                    >
                    <source src={props.background} type="video/mp4"/>
                </video>
            );
        } 
        if (props.onHover === 'img') {
            return (
                <img src={props.background} alt={props.title}/>
            );
        }
    }

    return (
        <Card className="hoverDisplayCard">
            <CardContent>
                {props.background 
                ? <div className="project">
                    <a href={props.link}
                       onMouseOver={hoverOn}
                       onMouseOut={hoverOff}>
                        {backgroundContent()}
                        {textContent()}
                    </a>
                </div>
                : <div className={"more"}>
                    {textContent()}
                </div>}
            </CardContent>
        </Card>
    );
}

export default HoverDisplay;