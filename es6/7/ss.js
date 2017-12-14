function aa(){

  console.log(666);

}

function bb(){
  console.log( Array.prototype.slice.call(arguments) );
}

function cc(){
  console.log( name()+age() );
}

function name(){
  return "wfy";
}

function age(){
  return 18;
}

module.exports = {
  aa,
  bb,
  cc
}