import anime from "animejs/lib/anime.es.js";
import logo from '../assets/logo.png';
import { useEffect, useRef } from "react";
import { useLoader } from "../main";

const Loader = () => {
  const top_logo = useRef(null);
  const {loader} = useLoader();

  return (
    <section className="loader" style={loader ? {display:'flex'} : {display:'none'}}>
      <img src={logo} alt="" ref={top_logo} style={{width:150}} />
    </section>
  );
}

export default Loader;