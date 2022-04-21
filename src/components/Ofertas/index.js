import React from 'react';
import CardOferta from './CardOferta';
import styles from './Ofertas.module.scss'
import plantas from './plantas.json'

function Ofertas() {
   return (
      <section className={styles.container}>
         <p className={styles.titulo}>Conheça nossas</p>
         <p className={styles.titulo__grande}>ofertas</p>
         <div className={styles.plantas}>
            {plantas.map((planta) => (
               <CardOferta key={planta.id} {...planta} />
            ))}
         </div>
      </section>
   );
}

export default Ofertas;