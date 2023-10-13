var arr = [{dp:"https://t4.ftcdn.net/jpg/05/60/89/51/360_F_560895109_gDZfUM1GDqw8CYdJIg4YF9xl4ByCFSat.jpg",story:"https://imagetrending.com/wp-content/uploads/2023/05/Little-Krishna-Images-4.png"},
{dp:"https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
{dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",story:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"},
{dp:"https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",story:"https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"}
]
var clutter = ""
var s = document.querySelector(".stories")
arr.forEach(function(s,ind){
  clutter += ` <div class="story">
  <img id="${ind}" src="${s.dp}" alt="" >
        </div>`
})
s.innerHTML = clutter
s.addEventListener("click",function(dets)
{
  document.querySelector(".fullScreen").style.display = "block"
  document.querySelector(".fullScreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector(".fullScreen").style.display = "none"
  },6000)
})
document.querySelector(".fullScreen").addEventListener("click",function(){
  document.querySelector(".fullScreen").style.display = "none"
})