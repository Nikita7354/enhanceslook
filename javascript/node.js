var allElems = document.querySelectorAll(".elem")

allElems.forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
    elem.childNodes[5].style.left = dets.x + "px"

    elem.childNodes[5].style.rotate =(dets.x - elem.getBoundingClientRect().width/2) /50 + 'deg'
})
elem.addEventListener("mouseenter", function(dets){
    elem.childNodes[5].style.opacity = 1
})
elem.addEventListener("mouseleave", function(dets){
elem.childNodes[5].style.opacity = 0

})



})
