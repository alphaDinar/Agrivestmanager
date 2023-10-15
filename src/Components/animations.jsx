import anime from "animejs/lib/anime.es.js"

export const animeTotalBox =(el)=>{
  anime({
    targets : el,
    scale : [0.8,1],
    translateY : [-5,0]
  })
}

export const animeSalesBox =(salesBox,i)=>{
  anime({
    targets: salesBox,
    translateY: [-10, 0],
    opacity: [0, 1],
    delay: i * 100
  })
}

export const animeBox =(box,i)=>{
  anime({
    targets: box,
    translateY: [-100, 0],
    opacity: [0, 1],
    delay: i * 100
  })
}