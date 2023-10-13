var n = document.querySelector(".nav")
var con = document.querySelector(".container")
var s = document.querySelector("i")
var m = document.querySelector(".menu")
var csr = document.querySelector(".cursor")
var count = 0
// for dark mode
s.addEventListener("click",function(){
    if(count == 0)
    {
    s.style.color = "#fff"
    n.style.backgroundColor = "#000"
    csr.style.backgroundColor = "#000"
    m.style.color = "#fff"
    con.style.backgroundColor = "#fff"
    count = 1
    }
    else{
        con.style.backgroundColor = "#000"
        s.style.color = "#000"
        n.style.backgroundColor = "#fff"
        m.style.color = "#000"
        count = 0
        csr.style.backgroundColor = "#fff"
    }
})

con.addEventListener("mousemove",function(val){
    csr.style.left = val.x + "px"
    csr.style.top = val.y + "px"
})