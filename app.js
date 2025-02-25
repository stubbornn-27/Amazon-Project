function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function expand(){
  document.getElementById('ret').style.display = 'block';
  document.getElementById('opn').style.display = 'none';
  document.getElementById('cls').style.display = 'inline';
}

function collapse(){
  document.getElementById('ret').style.display = 'none';
  document.getElementById('opn').style.display = 'inline';
  document.getElementById('cls').style.display = 'none';
}


let cartQuant = 0;

function addCart(changeObject){
  if(changeObject === 'one'){
  let ourQuantity = parseFloat(document.getElementById('quantity').value);

  cartQuant = cartQuant + ourQuantity;
  document.getElementById("cartty").innerHTML = cartQuant;
  }
 else if(changeObject === 'two'){
  let ourQuantity = parseFloat(document.getElementById('quantity2').value);


cartQuant += ourQuantity;
document.getElementById('cartty').innerHTML = cartQuant;
}

 else if(changeObject ==='three'){
  let ourQuantity = parseFloat(document.getElementById('quantity3').value);

  cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

} else if (changeObject === 'four'){
  let ourQuantity = parseFloat(document.getElementById('quantity4').value);

  cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

}
else if (changeObject === 'four'){
  let ourQuantity = parseFloat(document.getElementById('quantity4').value);

  cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

}
else if (changeObject === 'five'){
  let ourQuantity = parseFloat(document.getElementById('quantity5').value);

  cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

}
else if (changeObject === 'six'){
  let ourQuantity = parseFloat(document.getElementById('quantity6').value);

 cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

}
else if (changeObject === 'seven'){
  let ourQuantity = parseFloat(document.getElementById('quantity7').value);

  cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

}
else if (changeObject === 'eight'){
  let ourQuantity = parseFloat(document.getElementById('quantity8').value);

 cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

}
else if (changeObject === 'nine'){
  let ourQuantity = parseFloat(document.getElementById('quantity9').value);

 cartQuant += ourQuantity;
  document.getElementById('cartty').innerHTML = cartQuant;

}}
  document.getElementById('added').innerHTML = 'Added'; 



// function addCart(){
//   cartQuant = cartQuant + '';
//   document.getElementById('opsClick').innerHTML = cartQuant;
// }
