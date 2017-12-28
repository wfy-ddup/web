var counter = 3;

function incCounter() {
  counter++;
}

function first(){
  return ( new Date().getTime() );
}

function star(){
  return first();
}

module.exports = { 
  counter: counter,
  get counter(){
    return counter
  },
  star: star,
  incCounter: incCounter 
};