import React, { useState } from 'react';
import styles from './styles.module.css'
import { MenuIniciar } from '../';
import { Resultado } from '../';
import { Quiz } from '../';

export const App = () => {
  const [modo, setModo] = useState('iniciar')
  const [pontos, setPontos] = useState(0)

  return (
    <div className={styles.main}>
      {modo === 'iniciar' && <MenuIniciar onStartClick={() => setModo('quiz')}/>}

      {modo === 'quiz' && <Quiz setModo={setModo} pontos={pontos} setPontos={setPontos}/>}

      {modo === 'resultado' && <Resultado pontos={pontos}/>}
    </div>
  )
}