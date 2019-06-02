function produceDrivingRange(blockRange){
  return function(start, end){
    let startBlock = parseInt(start)
    let endBlock = parseInt(end)
    let distance = (endBlock-startBlock)
    let difference = blockRange - distance

    return (difference > 0) ? `within range by ${difference}`:`${Math.abs(difference)} blocks out of range`;
  }
}

function produceTipCalculator(percentage){
  return function(rideFare){
    return rideFare*percentage;
  }

}

function createDriver(){
let DriverId = 0;

return class {
  constructor(name){
    this.name = name
    this.id = ++DriverId
  }
}
}
