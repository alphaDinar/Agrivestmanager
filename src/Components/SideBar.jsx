import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles/sideBar.module.css';
import logo from '../assets/logo.png';
import anime from "animejs/lib/anime.es.js";
import { Link } from 'react-router-dom';
import { icon } from './external';

const SideBar = (props) => {
  const top_name = useRef(null);
  const top_logo = useRef(null);
  const sideBarLinks = useRef([]);

  const sideBarToggled = props.props[0]
  const setSideBarToggled = props.props[1]

  const toggleSideBar =()=>{
    if(sideBarToggled){
      setSideBarToggled(false)
    }else{
      setSideBarToggled(true)
    }
  }

  useEffect(() => {
    anime({
      targets: top_logo.current,
      scale: [0, 1]
    })

    sideBarLinks.current.forEach((el,i)=>{
      anime({
        targets: el,
        translateY: [10, 0],
        opacity: [0, 1],
        delay: i * 100
      })
    })
  })
  // <Link ref={el => sideBarLinks.current[2] = el}>{icon('message')}<span>Messages</span></Link>
  // <Link ref={el => sideBarLinks.current[3] = el}>{icon('settings')}<span>Settings</span></Link>
  // <Link ref={el => sideBarLinks.current[4] = el}>{icon('inventory_2')}<span>Products</span></Link>
  // <Link ref={el => sideBarLinks.current[5] = el}>{icon('sentiment_satisfied')}<span>Customers</span></Link>

  return (
    <section className={ !sideBarToggled ? styles.sideBar : `${styles.sideBar} ${styles.change}`}  >
    <button type="button" onClick={toggleSideBar}>{icon('menu')}</button>
      <header>
        <img src={logo} alt="" ref={top_logo} />
      </header>
      <hr className={styles.divider} />
      <nav>
        <Link to='/' ref={el => sideBarLinks.current[0] = el}>{icon('pie_chart')}<span>Dashboard</span></Link>
        <Link to='invoice' ref={el => sideBarLinks.current[1] = el}>{icon('payments')}<span>Invoices</span> </Link>
      </nav>
      <hr className={styles.divider} />
      <footer>
        <Link>{icon('logout')}<span>Logout</span></Link>
      </footer>
    </section>
  );
}

export default SideBar;