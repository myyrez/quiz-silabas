import React from 'react';
import styles from './styles.module.css';

export const MenuIniciar = ({ onStartClick }) => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p>*SVGs das silabas do jogo*</p>
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