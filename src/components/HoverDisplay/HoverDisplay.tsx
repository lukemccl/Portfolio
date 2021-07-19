import React from 'react';
import * as styles from './HoverDisplay.scss'

interface DisplayBoxProps {
    title?: string
    background?: any
    desc?: string
    link?: string
    onHover?: 'video' | 'img' | 'empty'
}

const HoverDisplay = (props : DisplayBoxProps) => {

    const hoverOn = (event : React.MouseEvent) => {
        const target = event.target as HTMLVideoElement
        target.play()
    }

    const hoverOff = (event : React.MouseEvent) => {
        var target = event.target as HTMLVideoElement
        target.pause()
    }

    const textContent = ({title, desc} : DisplayBoxProps) => {
        return (
            <div>
                <h2>{title ? title : "More coming soon..."}</h2>
                <p>{desc}</p>
            </div>
        );
    }

    const backgroundContent = ({title, background, onHover} : DisplayBoxProps) => {
        if (onHover === 'video') {
            return (
                <div>
                    <video 
                        disableRemotePlayback 
                        id={title} 
                        loop 
                        muted 
                        playsInline
                        onMouseOver={hoverOn}
                        onMouseOut={hoverOff}
                    >
                        <source src={background} type="video/mp4"/>
                    </video>
                    {textContent}
                </div>
            );
        } 
        if (onHover === 'img') {
            return (
                <div>
                    <img src={background} alt={title}/>
                    {textContent}
                </div>
            );
        }
    }

    return (
        props.background ? 
        <div className={styles.project}>
            <a href={props.link}>
                {backgroundContent}
            </a>
        </div>
        :
        <div className={styles.more}>
            {textContent}
        </div>
    );
}

export default HoverDisplay;