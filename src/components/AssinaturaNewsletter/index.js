import React from 'react';
import styles from './AssinaturaNewsletter.module.scss'

function AssinaturaNewsletter() {
   return (
      <div className={styles.newsletter_banner}>
         <section>
            <p className={styles.texto}>Sua casa com as</p>
            <p className={styles.texto__grande}>melhores plantas</p>
            <p className={styles.texto}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
         </section>
         <form action="#" className={styles.formNewsletter}>
            <input placeholder='Insira seu e-mail' type="email" name="email" />
            <button className={styles.submitBtn}>Assinar newsletter</button>
         </form>
      </div>
   );
}

export default AssinaturaNewsletter;