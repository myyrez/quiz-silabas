import React, { useState, useEffect } from 'react';
import boneca from '../../assets/boneca.png'
import boca from '../../assets/boca.png'
import borboleta from '../../assets/borboleta.png'
import caneta from '../../assets/caneta.png'
import casa from '../../assets/casa.png'
import styles from './styles.module.css'

export const Quiz = ({ setModo, pontos, setPontos }) => {
    const [imagemAtual, setImagemAtual] = React.useState(casa)
    const [palavraAtual, setPalavraAtual] = React.useState('CASA')
    const [palavraEscrita, setPalavraEscrita] = React.useState('')
    const [imagemCounter, setImagemCounter] = React.useState(1)
    // let imagemAtual = casa

    const handlePalavra = e => {
        setPalavraEscrita((palavraEscrita + e.target.value).toUpperCase())
    }
    
    const gerarProxImagem = () => {
        if (palavraAtual == palavraEscrita) setPontos(pontos+1)
        
        setPalavraEscrita('')
        
        if (imagemCounter == 1) {
            setImagemAtual(boca)
            setPalavraAtual('BOCA')
            // return imagemAtual = boca
        }
        if (imagemCounter == 2) {
            setImagemAtual(caneta)
            setPalavraAtual('CANETA')
            // return imagemAtual = caneta
        }
        if (imagemCounter == 3) {
            setImagemAtual(boneca)
            setPalavraAtual('BONECA')
            // return imagemAtual = boneca
        }
        if (imagemCounter == 4) {
            setImagemAtual(borboleta)
            setPalavraAtual('BORBOLETA')
            // return imagemAtual = borboleta
        }
        
        setImagemCounter(imagemCounter+1)
        if (imagemCounter === 5) setModo('resultado')
    }

    return (
        <div className={styles.main}>
            <div className={styles.imagem}>
                <img src={imagemAtual} width='200' height='200'/>
                <input
                    className={styles.respostaInput}
                    onChange={handlePalavra}
                    value={palavraEscrita}/>
            </div>
            <div className={styles.escolhasGrid}>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'pa'}>PA</button>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'ca'}>CA</button>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'ne'}>NE</button>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'sa'}>SA</button>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'ta'}>TA</button>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'bor'}>BOR</button>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'le'}>LE</button>
                <button className={styles.silabaButton} onClick={handlePalavra} value={'bo'}>BO</button>
            </div>
            <div className={styles.proximaDiv}>
                <button className={styles.proximaButton} onClick={gerarProxImagem}>PROXIMA</button>
            </div>
        </div>
    )
}

// module.exports = { Quiz }