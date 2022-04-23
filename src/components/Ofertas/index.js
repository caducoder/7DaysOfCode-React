import React, { useState, useEffect } from 'react';
import CardOferta from './CardOferta';
import styles from './Ofertas.module.scss'
import { getPlantas } from '../../api/PlantaService'

function Ofertas() {
   const [plantas, setPlantas] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         let lista = await getPlantas();
         lista = lista.filter(p => p.estoque !== 0)
         setPlantas(lista);
      }
      fetchData()
   }, []);

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