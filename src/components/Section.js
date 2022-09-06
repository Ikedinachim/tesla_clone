import React from 'react';
import Arrow from '../UI/Arrow';
import classes from './Section.module.css';
import Image from '../images/model-y.jpg';
import { Fade } from 'react-awesome-reveal';
const Section = ({title, description, leftBtnText, rightBtnText, backgroundImg}) => {
    
    return (
        <div className={classes.section} style={{backgroundImage:`url(${backgroundImg})`}} >
            <Fade bottom>
            <div className={classes.itemText}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            </Fade>
            <div className={classes.btnClass}>

                <Fade bottom>

            <div className={classes.btnGroup}>
                <div className={classes.leftBtn}>
                    {leftBtnText}
                </div>
                {rightBtnText && 
                <div className={classes.rightBtn}>
                    {rightBtnText}
                </div>
                }
            </div>
                </Fade>
            <Arrow />
            </div>
        </div>
    );
};

export default Section;