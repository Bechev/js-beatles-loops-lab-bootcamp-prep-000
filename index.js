function theBeatlesPlay(musicians, instruments){
  var array=[];
  for(var i=0; i < musicians.length; i++){

    array.push (musicians[i] + " plays " + instruments [i])
  }
  return array
}


function johnLennonFacts(facts){
  let i= 0
  while (i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var array=[];
  do{
    array.push ("I love the Beatles!")
  } while (number<15)
  return array
}
