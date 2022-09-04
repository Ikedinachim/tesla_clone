import React from 'react';
import Arrow from '../UI/Arrow';
import classes from './Section.module.css';
import Image from '../images/model-y.jpg';
const Section = ({title, description, leftBtnText, rightBtnText, backgroundImg}) => {
    
    return (
        <div className={classes.section} style={{backgroundImage:`url(${backgroundImg})`}} >
            <div className={classes.itemText}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={classes.btnClass}>

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
            <Arrow />
            </div>
        </div>
    );
};

export default Section;