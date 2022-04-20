import React from 'react';
import styles from './ComoConseguir.module.scss'
import planta from '../../assets/planta.png'

function ComoConseguir() {
   return (
      <section className={styles.como__conseguir}>
         <div className={styles.container}>
            <div className={styles.container__planta}>
               <img className={styles.planta} src={planta} alt="Imagem de uma planta verde" />
            </div>
            <div className={styles.box}>
               <p className={styles.texto}>Como conseguir</p>
               <p className={styles.texto__grande}>minha planta</p>
               <ul className={styles.passos}>
                  <li>Escolha suas plantas</li>
                  <li>Faça seu pedido</li>
                  <li>Aguarde na sua casa</li>
               </ul>
            </div>
         </div>
      </section>
   );
}

export default ComoConseguir;