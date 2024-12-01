var btn = document.querySelector("button")
var h3 = document.querySelector("h3")

btn.addEventListener("click",function(){
    h3.innerHTML = 'request sent'
    h3.style.color ='green'
setTimeout(function(){
    h3.innerHTML="friends"
    h3.style.color ="green"
    btn.innerHTML="remove friend"
},3000)


})