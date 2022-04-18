import React from 'react';
import styles from './Menu.module.scss'
import logo from '../../assets/logo.png'

function Menu() {
   return (
      <header className={styles.header}>
         <div className={styles.logo}>
            <img src={logo} alt="Uma folha verde e do lado escrito Casa Verde" />
         </div>
         <nav className={styles.nav}>
            <ul>
               <li className='nav_item'>Como fazer</li> /
               <li className='nav_item'>Ofertas</li> /
               <li className='nav_item'>Depoimentos</li> /
               <li className='nav_item'>Vídeos</li> /
               <li className='nav_item'>Meu carrinho</li>
            </ul>
         </nav>
      </header>
   );
}

export default Menu;