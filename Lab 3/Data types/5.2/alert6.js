function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );