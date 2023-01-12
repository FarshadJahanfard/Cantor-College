function resizeMenu (){
    console.log(window.innerWidth) 
    var hero = document.querySelector(".hero")
    var menuItems = hero.querySelectorAll("li")
    if (window.innerWidth <718){
       for( let a = 0; a <menuItems.length; a++ ){
        if (document.getElementById("burger-switch").value == 0) {
            menuItems[a].style.display= "none"
        }
        else {
            menuItems[a].style.display= "block"
        }
       }
       document.getElementById("burger-btn").style.display = "block"
    }

    else {
        for( let a = 0; a <menuItems.length; a++ ){
            menuItems[a].style.display= "inline-block"
    }
    document.getElementById("burger-btn").style.display = "none"
}
}
window.onresize = function (){
    resizeMenu()
}
resizeMenu()

document.getElementById("burger-btn").addEventListener("click", function(){
    if (document.getElementById("burger-switch").value == 0) {
        document.getElementById("burger-switch").value = 1
    }
    else {
        document.getElementById("burger-switch").value = 0
    }
    resizeMenu()
})

