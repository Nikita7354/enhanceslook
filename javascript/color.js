var heads= document.querySelectorAll("h1")

heads.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        elem.style.backgroundColor ="red"
        console.log("mouse is on",elem.textContent)

    })
    elem.addEventListener("mouseleave" ,function(){
        elem.style.backgroundColor = "transparent"
    })

})