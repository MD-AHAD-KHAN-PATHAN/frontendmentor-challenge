let checkBox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly');
let Yearly = document.querySelectorAll('.price-annually');

checkBox.addEventListener('change', function(){
    if(checkBox.checked){

        Monthly.forEach(price => price.style.display = "none");
        Yearly.forEach(price => price.style.display = "flex");
    }
    else{

        Monthly.forEach(price => price.style.display = "flex");
        Yearly.forEach(price => price.style.display = "none");
    }
} )