import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'

export const Quiz = () => {
    const [imagemAtual, setImagemAtual] = useState('casa')
    const [palavraEscrita, setPalavraEscrita] = useState('')
    const [imagemCounter, setImagemCounter] = useState(1)

    let [ponto, setPonto] = useState(0)

    const handlePalavra = e => {
        setPalavraEscrita(palavraEscrita + e.target.value)
    }

    const checarSilaba = () => {
        if (imagemAtual == 'boca' && palavraEscrita == 'boca') setPonto(ponto+=1)
        if (imagemAtual == 'casa' && palavraEscrita == 'casa') setPonto(ponto+=1)
        if (imagemAtual == 'caneta' && palavraEscrita == 'caneta') setPonto(ponto+=1)
        if (imagemAtual == 'borboleta' && palavraEscrita == 'borboleta') setPonto(ponto+=1)
        console.log(ponto)
    }
    
    const gerarProxImagem = () => {
        setPalavraEscrita('')

        if (imagemCounter == 1) setImagemAtual('boca')
        if (imagemCounter == 2) setImagemAtual('caneta')
        if (imagemCounter == 3) setImagemAtual('boneca')
        if (imagemCounter == 4) setImagemAtual('borboleta')

        setImagemCounter(imagemCounter+=1)
    }

    const callImagemChecar = () => {
        checarSilaba()
        gerarProxImagem()
    }

    return (
        <div className={styles.main}>
            <div className={styles.imagem}>
                <span>*imagem da palavra*</span>
                <input onChange={handlePalavra} value={palavraEscrita}/>
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
                <button className={styles.proximaButton} onClick={callImagemChecar}>PROXIMA</button>
            </div>
        </div>
    )
}