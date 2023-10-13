
     
    
    const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }
    document.querySelector(".con").addEventListener("mousemove", throttleFunction((dets)=>{
      
        var div = document.createElement("div")
        var img = document.createElement("img")
        div.classList.add("imageDiv")
        div.style.left = dets.clientX + "px"
        div.style.top = dets.clientY + "px"

        img.setAttribute("src","https://i.pinimg.com/236x/c2/3e/53/c23e532ed2b4ab1e1eecc4e118f15541.jpg")
        div.appendChild(img)
        document.body.appendChild(div)
        gsap.to('img',{
          y: "0"
        ,
        ease: Power1,
        duration: 0.6
        })
        gsap.to('img',{
          y: "100%"
        ,
        delay:.7,
        ease: Power2,
        
        })
        setTimeout(function(){
            div.remove()
        },500)
    },400));

// throttling - kisi particular code ke no of execution ko kam kar dena