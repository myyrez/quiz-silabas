import React, { useState, useEffect } from 'react';
import boneca from '../../assets/boneca.png'
import boca from '../../assets/boca.png'
import borboleta from '../../assets/borboleta.png'
import caneta from '../../assets/caneta.png'
import casa from '../../assets/casa.png'
import styles from './styles.module.css'

export const Quiz = ({ setModo, pontos, setPontos }) => {
    const [imagemAtual, setImagemAtual] = useState(casa)
    const [palavraAtual, setPalavraAtual] = useState('CASA')
    const [palavraEscrita, setPalavraEscrita] = useState('')
    const [imagemCounter, setImagemCounter] = useState(1)

    const handlePalavra = e => {
        setPalavraEscrita((palavraEscrita + e.target.value).toUpperCase())
    }
    
    const gerarProxImagem = () => {
        if (palavraAtual == palavraEscrita) setPontos(pontos+1)
        
        setPalavraEscrita('')
        
        if (imagemCounter == 1) {
            setImagemAtual(boca)
            setPalavraAtual('BOCA')
        }
        if (imagemCounter == 2) {
            setImagemAtual(caneta)
            setPalavraAtual('CANETA')
        }
        if (imagemCounter == 3) {
            setImagemAtual(boneca)
            setPalavraAtual('BONECA')
        }
        if (imagemCounter == 4) {
            setImagemAtual(borboleta)
            setPalavraAtual('BORBOLETA')
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