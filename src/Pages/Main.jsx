import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles/main.module.css'
import anime from "animejs/lib/anime.es.js"
import DoughChart from '../Components/Charts/DoughChart';
import { animeBox, animeSalesBox } from '../Components/animations';
import Sales from '../Components/Sales';
import { icon } from '../Components/external';
import { allFarmInvoices, allProduceInvoices, allTradeInvoices } from '../Graph/graph';
import { useLoader } from '../main';

const Main = (mainStyle) => {
  const {setLoader} = useLoader();
  const loading = allTradeInvoices()[0];
  const tradeInvoices = allTradeInvoices()[1];
  const farmInvoices = allFarmInvoices()[1];
  const produceInvoices = allProduceInvoices()[1];

  const [tradeTotal, setTradeTotal] = useState(0);
  const [farmTotal,setFarmTotal] = useState(0);
  const [produceTotal, setProduceTotal] = useState(0);

  const box_tag = useRef(null);
  const boxes = useRef([]);
  const saleBoxes = useRef([]);
  const [sales, setSales] = useState([]);
  const [salesTotal, setSalesTotal] = useState(0);
  const [typeList, setTypeList] = useState([30, 20, 50]);
  const [typeListPercent, setTypeListPercent] = useState([30, 20, 50]);
  const [sortedInvoices, setSortedInvoices] = useState([]);
  const [deadlineInvoices, setDeadlineInvoices] = useState([]);

  useEffect(() => {
    setLoader(true);
    boxes.current.forEach((box, i) => {
      animeBox(box, i)
    })

    saleBoxes.current.forEach((salesBox, i) => {
      animeSalesBox(salesBox, i)
    })

    const tradeTotalTemp = tradeInvoices.reduce((val, el)=> val + el.totalCost, 0);
    const farmTotalTemp = farmInvoices.reduce((val,el)=> val + el.totalCost, 0);
    const produceTotalTemp = produceInvoices.reduce((val,el)=> val + el.totalCost, 0);

    const total = tradeTotalTemp + farmTotalTemp + produceTotalTemp;
    setSalesTotal(total)
    const getFrac =(val)=>{
      return Math.round((val * 100)/total) || 0
    }

    setTypeListPercent([getFrac(produceTotalTemp),getFrac(tradeTotalTemp),getFrac(farmTotalTemp)]);


    setTradeTotal(tradeTotalTemp);
    setFarmTotal(farmTotalTemp);  
    setProduceTotal(produceTotalTemp);

    const sortByTime = (a, b) => {
      const timeA = new Date(a.startTime).getTime();
      const timeB = new Date(b.startTime).getTime();
      return timeB - timeA;
    }

    const sortByDeadline = (a, b) => {
      const timeA = new Date(a.endDate).getTime();
      const timeB = new Date(b.endDate).getTime();
      return timeA - timeB;
    }    

    const sortedInvoicesTemp = tradeInvoices.concat(farmInvoices).concat(produceInvoices).sort(sortByTime).slice(0, 5);
    setSortedInvoices(sortedInvoicesTemp)
    const deadlineInvoicesTemp = tradeInvoices.concat(farmInvoices).sort(sortByDeadline).slice(0, 5);
    setDeadlineInvoices(deadlineInvoicesTemp)

    !loading && setLoader(false);

  }, [tradeInvoices, farmInvoices, produceInvoices])

  var imageUrl = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1692888157/Obuoba/a2msoxcerqylcitrf4hj.jpg';

  return (
    <main className={window.innerWidth > 1050 ? mainStyle.props : styles.main}>
      <section className={styles.left}>
        <header>
          <p>
            <strong>Dashboard</strong>
            <small style={{ color: 'rgb(112, 112, 112)' }}>Payments</small>
          </p>

        </header>

        <section className={styles.top_box}>
          <div ref={el => boxes.current[0] = el} className={styles.box} style={{ background: '#c6d0bc' }}>
            <div>
              <p>
                {icon('agriculture', '#b4c2a6', '#859870')}
                <span>Farms</span>
              </p>
              <small style={{ background: '#839770', color: '#c6d0bc' }}>{farmInvoices.length}</small>
            </div>
            <strong>GH¢ {farmTotal}</strong>
            <hr style={{ width: '100%', borderTop: '2px dotted #839770' }} />
          </div>
          <div ref={el => boxes.current[1] = el} className={styles.box} style={{ background: '#f6d78b' }}>
            <div>
              <p>
                {icon('shopping_cart', '#e9c775', '#859870')}
                <span>Trades</span>
              </p>
              <small style={{ background: '#e0b857', color: 'white' }}>{tradeInvoices.length}</small>
            </div>
            <strong>GH¢ {tradeTotal}</strong>
            <hr style={{ width: '100%', borderTop: '2px dotted #859870' }} />
          </div>
          <div ref={el => boxes.current[2] = el} className={styles.box} style={{ background: '#a3a7fc' }}>
            <div>
              <p>
                {icon('store', '#7a7fef', 'white')}
                <span>Produce</span>
              </p>
              <small style={{ background: '#7a7fef', color: 'white' }}>{produceInvoices.length}</small>
            </div>
            <strong>GH¢ {produceTotal}</strong>
            <hr style={{ width: '100%', borderTop: '2px dotted #859870' }} />
          </div>
        </section>

        <section className={styles.userBox}>
          <section className={styles.head}>
            <h4>Recent Sales</h4>
          </section>
          {!loading ? <Sales props={{ loading, list: sortedInvoices, type: 'recent' }} /> :
            null
          }
        </section>

      </section>
      <section className={styles.right}>
        <header>
          <p>
            <strong>Sales Chart</strong>
          </p>
          <section className={styles.salesChartBox}>
            <section className={styles.salesChartCanvas} style={{ width: 200 }}>
              <DoughChart props={[typeListPercent, ['#a9aeff', '#f5d78b', '#c6d0bc']]} />
              <span>GH¢ {salesTotal}</span>
            </section>
            <legend>
              <div>
                <small>Farms</small>
                <h3> {typeListPercent[2]} %</h3>
                <article><p style={{ background: '#c6d0bc', width: `${typeListPercent[2]}%` }}></p></article>
              </div>
              <div>
              <small>Trades</small>
              <h3>{typeListPercent[1]} %</h3>
              <article><p style={{ background: '#f5d78b', width: `${typeListPercent[1]}%` }}></p></article>
              </div>
              <div>
                <small>Produces</small>
                <h3>{typeListPercent[0]} %</h3>
                <article><p style={{ background: '#a9aeff', width: `${typeListPercent[0]}%` }}></p></article>
              </div>
            </legend>

          </section>
        </header>
        <section className={styles.salesBox}>
          <strong>Deadlines</strong>
          {!loading ? <Sales props={{ loading, list: deadlineInvoices, type: 'dead',size:'mini' }} /> :
            null
          }
        </section>
      </section>
    </main>
  );
}

export default Main;