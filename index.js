const produceDrivingRange = (blockRange) => {
  return (d1,d2) => {
    let cNum1 = [...d1].slice(0,2).join('');
    let cNum2 = [...d2].slice(0,2).join('');
    let totalDistance = Math.abs(cNum1 - cNum2);
    let range = Math.abs(totalDistance - blockRange);

     if (totalDistance < blockRange) {
       return `within range by ${range}`;
     } else {
       return `${range} blocks out of range`;

     }



  }
}


const produceTipCalculator = (percent) => {

  return (tip) => {
        return tip * percent
  }
}

createDriver = () => {
    let driverId = 0;
  return class Driver {
      constructor(name){
        this.name = name;
        this.id = ++driverId;
      }
  }
}
