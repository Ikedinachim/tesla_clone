import React from 'react';
import classes from './Arrow.module.css'
const Arrow = () => {
    return (
        <div className={classes.arrow} >
            <svg  height={30} xmlns='http://www.w3.org/2000/svg' fill="white" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>

        </div>
    );
};

export default Arrow;