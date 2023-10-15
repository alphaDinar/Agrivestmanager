import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import SideBar from './Components/SideBar'
import Main from './Pages/Main'
import Invoice from './Pages/Invoice'
import styles from './Styles/panel.module.css'
import pageStyles from './Styles/panel.module.css'
import Loader from './Components/Loader';

function App() {
  const [sideBarToggled, setSideBarToggled] = useState(false)
  const mainStyle = !sideBarToggled ? pageStyles.main : `${pageStyles.main} ${pageStyles.change}`
  return (
    <>
    <Loader/>
      <section className={styles.page}>
        <SideBar props={[sideBarToggled, setSideBarToggled]} />
        <Routes>
          <Route path='/' element={<Main props={mainStyle} />} />
          <Route path='invoice' element={<Invoice props={mainStyle} />} />
        </Routes>
      </section>
    </>
  )
}

export default App
