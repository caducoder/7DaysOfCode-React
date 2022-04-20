import React from 'react';
import styles from './AssinaturaNewsletter.module.scss'
import { MdOutlineEmail } from 'react-icons/md'
import broto from '../../assets/broto.png'

function AssinaturaNewsletter() {
   return (
      <div className={styles.newsletter_banner}>
         <img className={styles.broto_img} src={broto} alt="" />
         <section className={styles.box}>
            <p className={styles.texto}>Sua casa com as</p>
            <p className={styles.texto__grande}>melhores plantas</p>
            <p className={styles.texto}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form action="#" className={styles.formNewsletter}>
               <MdOutlineEmail className={styles.email__icon} />
               <input className={styles.email__input} placeholder='Insira seu e-mail' type="email" name="email" />
               <button className={styles.submitBtn}>Assinar newsletter</button>
            </form>
         </section>
      </div>
   );
}

export default AssinaturaNewsletter;