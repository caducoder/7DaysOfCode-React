import React, { useState, useEffect } from 'react';
import { send } from "emailjs-com";
import styles from './AssinaturaNewsletter.module.scss'
import { MdOutlineEmail } from 'react-icons/md'
import broto from '../../assets/broto.png'
import Modal from './Modal'

const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]*(\.)?[a-zA-Z]{2,}\.[a-zA-Z]{2,4}$/;

function AssinaturaNewsletter() {
   const [email, setEmail] = useState("");
   const [invalid, setInvalid] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const isValid = REGEX_EMAIL.test(email)
      setInvalid(isValid)
   }, [email]);

   const toSend = {
      subject: "CasaVerde",
      name: email.split(/@/)[0],
      email: email,
      reply_to: "casaverde@floresta.com.br"
   }

   const submitForm = (ev) => {
      ev.preventDefault()
      if (REGEX_EMAIL.test(email)) {
         send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, toSend, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
               console.log("Mensagem enviada com sucesso!");
            }, (error) => {
               alert("Erro ao enviar email.")
            });
         setInvalid(false)
         setIsOpen(true)
      } else {
         setInvalid(true)
      }
   }

   return (
      <div className={styles.newsletter_banner}>
         <img className={styles.broto_img} src={broto} alt="" />
         <section className={styles.box}>
            <p className={styles.texto}>Sua casa com as</p>
            <p className={styles.texto__grande}>melhores plantas</p>
            <p className={styles.texto}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form action="#" className={styles.formNewsletter} onSubmit={submitForm}>
               <MdOutlineEmail className={styles.email__icon} />
               <input
                  className={styles.email__input}
                  placeholder='Insira seu e-mail'
                  autoComplete='off'
                  type="email"
                  name="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
               />


               <button className={styles.submitBtn} disabled={!invalid}>Assinar newsletter</button>
            </form>

         </section>
         {isOpen && <Modal email={email} setIsOpen={setIsOpen} setEmail={setEmail} />}
      </div>
   );
}

export default AssinaturaNewsletter;