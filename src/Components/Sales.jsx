import { useEffect, useRef, useState } from "react";
import { animeSalesBox } from "./animations";
import { getTimeLeft, getTimeSince, icon } from "./external";

const Sales = ({props}) => {
  const [sales, setSales] = useState([]);
  const saleBoxes = useRef([]);
  const {list,type,size} = props;

  const testSales = [
    { name: 'Abdul', type: 'Trade', dateStarted: '', total: 4000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },
    { name: 'Osei Kyei Mensah Bonsu Junior', type: 'Farm', dateStarted: '', total: 2000 },

  ]


  useEffect(() => {
    saleBoxes.current.forEach((salesBox, i) => {
      animeSalesBox(salesBox, i)
    })
    
    // console.log(list)
  }, [list])


  return (
    <section className="sales">
      {list.length > 0 && list.map((sale, i) => (
        <div ref={el => saleBoxes.current[i] = el} className="sale" key={i}>
            <p>
              <span>{sale.customer.username}</span>
              <small>{sale.type || 'produce'}</small>
            </p>
          <span style={{ fontWeight: 600 }}>GH¢ {sale.totalCost}</span>
          <article>
            <p>
            {!size && <small style={{color:'salmon'}}>3rd May, 2024</small>}
            {type === 'recent' ?
              <small>{getTimeSince(sale.startTime)}</small> :
              <small>{getTimeLeft(sale.endDate)}</small>
            }
            </p>
            <button>{icon('arrow_forward')}</button>
          </article>
        </div>
      ))}
    </section>
  );
}

export default Sales;