export const sortType =(salesTemp)=>{
  var foodCount = 0
  var donationCount = 0
  var lifestyleCount = 0
  var allCount = salesTemp.length
  salesTemp.forEach((el,i)=>{
    if(el.type === 'food'){
      foodCount += 1
    }else if (el.type === 'donation') {
      donationCount += 1
    }else{
      lifestyleCount += 1
    }
  })
  var foodPercent = Math.round((foodCount * 100)/allCount)
  var donationPercent = Math.round((donationCount * 100)/allCount)
  var lifestylePercent = Math.round((lifestyleCount * 100)/allCount)
  return [[donationCount, lifestyleCount, foodCount],[foodPercent, donationPercent, lifestylePercent]]
}

// export const getRealDate =(prop)=>{
//   console.log(new Date(prop))
// }