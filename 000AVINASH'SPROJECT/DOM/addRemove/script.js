var sts = document.querySelector("h5")
var btn = document.querySelector(".add")

var flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
        sts.innerHTML = "Accepted"
        sts.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "#dadada"
        btn.style.color = "#111"
        flag = 1
    }
 else{
    sts.innerHTML = "Not friends, But he loves you"
    sts.style.color = "red"
    btn.innerHTML = "Add Friend"
    btn.style.backgroundColor = "cadetblue"
    btn.style.color = "#fff"
    flag = 0

 }
    
})

