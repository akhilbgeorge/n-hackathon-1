var sum1 = 0;
var sum2 = 0;
var sum = 0;

function increment1() {
  document.getElementById("count-1").value = parseInt(document.getElementById("count-1").value) + 1;
  sum1 = document.getElementById("count-1").value * 100;
  sum2 = document.getElementById("count-2").value * 150;
  sum  = sum1 + sum2; 
  document.getElementById("btn-sum").innerHTML = sum;
}

function decrement1() {
  if(parseInt(document.getElementById("count-1").value)) {
    
  }
  document.getElementById("count-1").value = parseInt(document.getElementById("count-1").value) - 1;
  sum1 = document.getElementById("count-1").value * 100;
  sum2 = document.getElementById("count-2").value * 150;
  sum  = sum1 + sum2;
  document.getElementById("btn-sum").innerHTML = sum;
}

function increment2() {
  document.getElementById("count-2").value = parseInt(document.getElementById("count-2").value) + 1;
  sum1 = document.getElementById("count-1").value * 100;
  sum2 = document.getElementById("count-2").value * 150;
  sum  = sum1 + sum2; 
  document.getElementById("btn-sum").innerHTML = sum;
}

function decrement2() {
  document.getElementById("count-2").value = parseInt(document.getElementById("count-2").value) - 1;
  sum1 = document.getElementById("count-1").value * 100;
  sum2 = document.getElementById("count-2").value * 150;
  sum  = sum1 + sum2; 
  document.getElementById("btn-sum").innerHTML = sum;
}

function doPayment() {
  window.location = '../payment-success/payment-success.html';
}


