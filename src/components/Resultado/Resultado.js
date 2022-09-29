import React from 'react';
import styles from './styles.module.css';

export const Resultado = ({ pontos }) => {
    return (
        <div className={styles.main}>
            <h1>Você acertou {pontos} palavras</h1>
        </div>
    )
}