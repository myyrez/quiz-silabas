import React from 'react';
import casa from '../../assets/casa.png'
import styles from './styles.module.css';

export const MenuIniciar = ({ onStartClick }) => {
    
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>Jogo das Sílabas</h1>
                <img src={casa} width='200' height='200'/>
            </div>
            <div className={styles.iniciarDiv}>
                <button 
                    className={styles.iniciarButton}
                    onClick={onStartClick}>INICIAR!
                </button>
            </div>
        </div>
    );
};