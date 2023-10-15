import React, { useEffect, useRef, useState } from 'react';
import componentStyles from '../Styles/component.module.css';
import anime from "animejs/lib/anime.es.js"
import styles from '../Styles/invoice.module.css';
import { animeSalesBox, animeTotalBox } from '../Components/animations';
import { v4 as uuidv4 } from 'uuid';
import Sales from '../Components/Sales';
import { getTimeLeft, icon } from '../Components/external';
import { allFarmInvoices, allProduceInvoices, allTradeInvoices } from '../Graph/graph';


const Invoice = (mainStyle) => {
  // const [invoiceList, setInvoiceList] = useState([]);
  const salesList = useRef();
  const [salesTotal, setSalesTotal] = useState(0);
  const totalBox = useRef();
  const [list, setList] = useState([]);
  const tradeInvoices = allTradeInvoices()[1];
  const farmInvoices = allFarmInvoices()[1];
  const produceInvoices = allProduceInvoices()[1];

  useEffect(()=>{
    const sortByTime = (a, b) => {
      const timeA = new Date(a.startTime).getTime();
      const timeB = new Date(b.startTime).getTime();
      return timeB - timeA;
    }

    const sortedInvoicesTemp = tradeInvoices.concat(farmInvoices).concat(produceInvoices).sort(sortByTime);

    setList(sortedInvoicesTemp)
  },[tradeInvoices, farmInvoices, produceInvoices])



  const updateSales = (tempInvoiceList) => {
    var salesTotalTemp = 0
    tempInvoiceList.forEach((obj, i) => {
      salesTotalTemp += Number(obj.total)
    })
    setSalesTotal(salesTotalTemp)
    animeTotalBox(totalBox.current)
  }

  var imageUrl = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1692888157/Obuoba/a2msoxcerqylcitrf4hj.jpg';

  return (
    <main className={window.innerWidth > 1050 ? mainStyle.props : styles.main}>
      <section className={styles.left}>
        <header>
          <h3>All Transactions</h3>
          <select>
            <option value="farm">Farms</option>
            <option value="trade">Trades</option>
            <option value="produce">Produces</option>
          </select>
          <div className={componentStyles.search_box}>
            <span>End Date</span>  
            <input type="date" name="" value="" />
          </div>
          <div className={componentStyles.search_box}>
            {icon('search')}
            <input type="text" name="" value="" placeholder='Search' />
          </div>
        </header>

        <Sales props={{list,type:'recent'}} />
      </section>
    </main>
  );
}

export default Invoice;