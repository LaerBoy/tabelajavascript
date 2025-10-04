// selecionar a tag DIV
let div = document.getElementById("tabela")

//criar a tabela
let tabela = document.createElement("table")
tabela.border="1"

//criar o cabeçalho
let thead = document.createElement("thead")

//criar a linha
let tr = document.createElement("tr")

//criar o elemento e atribuir um valor a ele
let th1 = document.createElement("th")
th1.textContent ="Fruta"

let th2 = document.createElement("th")
th2.textContent ="Preço"


let tbody = document.createElement("tbody")

let tr2 = document.createElement("tr")

let td1 = document.createElement("td")
td1.textContent="Maçã"
let td2 = document.createElement("td")
td2.textContent="50 kz"

let tr3 = document.createElement("tr")

let td3 = document.createElement("td")

td3.textContent="Laranja"
let td4 = document.createElement("td")
td4.textContent="100 kz"

let tr4 = document.createElement("tr")

let td5 = document.createElement("td")
td5.textContent="Uvas"
let td6 = document.createElement("td")
td6.textContent="150 kz"

// adicionar a tabela criada no JS no HTML
div.appendChild(tabela)

tabela.appendChild(thead)

thead.appendChild(tr)

tr.appendChild(th1)
tr.appendChild(th2)

tabela.appendChild(tbody)

tbody.appendChild(tr2)

tr2.appendChild(td1)
tr2.appendChild(td2)
tr2.appendChild(td3)
tr2.appendChild(td4)
tr2.appendChild(td5)
tr2.appendChild(td6)

//FORMULÁRIO
let div2=document.getElementById("formulario")

let form= document.createElement("form")

let label1=document.createElement("label")
label1.textContent="Nome da fruta"

let input1=document.createElement("input")
input1.type="text"
input1.name="nome"
input1.id="nome"
input1.required=true

let label2=document.createElement("label")
label2.textContent="Preço da fruta"

let input2=document.createElement("input")
input2.type="number"
input2.name="preco"
input2.id="preco"
input2.required=true

let button=document.createElement("button")
button.type="submit"
button.textContent="Enviar"

div2.appendChild(form)

form.appendChild(label1)
form.appendChild(input1)
form.appendChild(document.createElement("br"))
form.appendChild(label2)
form.appendChild(input2)
form.appendChild(document.createElement("br"))
form.appendChild(button)