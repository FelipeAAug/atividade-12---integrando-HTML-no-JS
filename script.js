const header = document.querySelector("header");
const h1 = document.createElement("h1")
h1.innerHTML = "H1 do Header"
header.style = "background-color: lightgrey;"
h1.style = "color: blue; text-align: center;" 
const main = document.querySelector("main")
const div1 = document.createElement("div")
const h2 = document.createElement("h2")
const p = document.createElement("p")
const div2 = document.createElement("div")
const h22 = document.createElement("h2")
const p2 = document.createElement("p")
h2.innerHTML = "H2 do main"
p.innerHTML = "parágrafo do main"
h22.innerHTML = "segundo H2 do main"
p2.innerHTML = " segundo parágrafo do main"
main.style = "color: green; font-size: 35px; background-color: lightgrey;"



header.appendChild(h1)
main.appendChild(div1, div2)
div1.appendChild(h2)
h2.appendChild(p)
main.appendChild(div2)
div2.appendChild(h22)
h22.appendChild(p2)