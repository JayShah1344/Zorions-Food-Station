let leftBtn = document.querySelector(".left-btn")
let rightBtn = document.querySelector(".right-btn")
let cards =document.querySelector(".cards")
let foodImage =document.querySelector(".foodimg")
let dishName = document.querySelector(".dishname")
let description = document.querySelector(".description")
let priceCount = document.querySelector(".price-cont")
 let card =document.getElementsByClassName("card")

//logic for scroll 
leftBtn.onclick = function(){
    cards.scrollLeft -=150;
}

rightBtn.onclick = function(){
    cards.scrollLeft +=150;
}

 Array.from(card).forEach((elem)=>{
    elem.addEventListener('click',() =>{
        foodImage.src=elem.getElementsByClassName("card-img")[0].src ;
        dishName.innerText = elem.getElementsByClassName("card-name")[0].innerText ;
        priceCount.innerHTML =elem.getElementsByClassName("card-price")[0].innerText;
    })
 })







