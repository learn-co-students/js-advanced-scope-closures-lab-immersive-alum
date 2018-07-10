function produceDrivingRange(blockRange){
  return function(start, end){
    start = parseInt(start.slice(0,-2));
    end = parseInt(end.slice(0,-2));
    if((end-start) <= blockRange){
      return `within range by ${blockRange-(end-start)}`;
    }else{
      return `${(end-start)-blockRange} blocks out of range`;
    }
  };
};

function produceTipCalculator(rate){
  return function(tip){
    return tip * rate;
  }
};

function createDriver(){
  let driverId = 0;
  return function Driver(name){
    this.id = driverId++;
    this.name = name;
  }
};
