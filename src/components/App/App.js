import React, { useState } from 'react';
import styles from './styles.module.css'
import { MenuIniciar } from '../';
import { Resultado } from '../';
import { Quiz } from '../';

export const App = () => {
  const [modo, setModo] = useState('iniciar')

  return (
    <div className={styles.main}>
      {modo === 'iniciar' && <MenuIniciar onStartClick={() => setModo('quiz')}/>}

      {modo === 'quiz' && <Quiz/>}

      {modo === 'resultado' && <Resultado/>}
    </div>
  )
}