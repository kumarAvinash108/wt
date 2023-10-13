var a = fetch("https://api.nasa.gov/planetary/apod?api_key=nl34JoP8KWf1De73XIcJESt7CRoMFZVgAvSuUbLZ")
a.then((val)=>{
   
    return val.json()
}).then((val)=>{
    console.log(val)
    var date = document.querySelector(".date h2")
    date.textContent = `Date : ${val.date}`
    var exp = document.querySelector(".explanation")
    exp.textContent = `${val.explanation}`
    document.querySelector(".container img").setAttribute("src",`${val.url}`)
    document.querySelector("a").setAttribute("href",`${val.url}`)
})