import React from 'react';
import styles from '../Styles/panel.module.css'
import Main from './Main';
import SideBar from './SideBar';

const Panel =()=>{
  return(
    <section className={styles.page}>
      <SideBar/>
      <Main/>
    </section>
  )
}

export default Panel