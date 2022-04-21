import React from 'react';
import styles from './CardOferta.module.scss'
import { BsArrowRightShort } from 'react-icons/bs'

function CardOferta({ name, imageSrc, price }) {
   return (
      <div className={styles.plant__box}>
         <div className={styles.photo}>
            <img src={imageSrc} alt="foto da planta" />
         </div>
         <div className={styles.plant__descr}>
            <p className={styles.plant__name}>
               {name}
            </p>
            <p className={styles.plant__price}>
               R$ {price.toFixed(2)}
            </p>
            <button className={styles.buy__btn}>
               Comprar <BsArrowRightShort size={30} />
            </button>
         </div>
      </div>
   );
}

export default CardOferta;