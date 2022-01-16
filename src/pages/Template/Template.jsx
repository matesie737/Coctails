import React from 'react';
import style from './style/Template.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Template =(props) =>{

    return (    
        <>
            <Header />
            <div className={style.page}>
                {props.page}
            </div>
            <Footer />
        </>
    );
}

export default Template;

