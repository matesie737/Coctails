import React from 'react';
import style from './style/NotFound.module.css'
import {
    Link
  } from "react-router-dom";


function NotFound() {

    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.leftColumn}>
                   <span className={style.letter}>O</span>
                   <span className={style.letter}>H</span>
                   <span className={style.letter}> </span>
                   <span className={style.letter}>N</span>
                   <span className={style.letter}>O</span>
                   <span className={style.letter}>!</span>
                </div>
                <div className={style.rightColumn}>
                    <div className={style.errorMessage}>
                        <p className={style.e404}>404</p>
                        <p className={style.e}>Error</p>
                    </div>
                </div>
            </div>
            <div className={style.link}>
            <Link to="/home">Back to Home page</Link>
            </div>
        </div>
    );
}


export default NotFound;
