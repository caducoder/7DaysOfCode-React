import React from 'react';
import styles from './Modal.module.scss'

function Modal({ email, setIsOpen, setEmail }) {
   console.log(email)
   return (
      <div className={styles.container}>
         <div className={styles.modal_box}>
            <p className={styles.modal_text}>
               Obrigado pela sua assinatura, você receberá nossas novidades no e-mail {email}.
            </p>
            <button
               className={styles.confirm_btn}
               onClick={() => { setIsOpen(false); setEmail('') }}
            >
               Ok
            </button>
         </div>
      </div>
   );
}

export default Modal;