const inputItem = document.getElementById("inputItem");
const inputPreco = document.getElementById("inputPreco");
const inputQntd = document.getElementById("inputQntd");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const tabela = document.getElementById("tabela");

let listaItems = [];
let aux = 0;

const redesenhaLista = (tabela, listaItems) => {
  let tableRow = document.createElement("tr");

  for (let i = aux; i < listaItems.length; i++) {
    let itemText = document.createTextNode(listaItems[i]["descricao"]);
    let tableData = document.createElement("td");
    tableData.appendChild(itemText);
    tableRow.appendChild(tableData);

    itemText = document.createTextNode(listaItems[i]["preco"]);
    tableData = document.createElement("td");
    tableData.appendChild(itemText);
    tableRow.appendChild(tableData);

    itemText = document.createTextNode(listaItems[i]["quantidade"]);
    tableData = document.createElement("td");
    tableData.appendChild(itemText);
    tableRow.appendChild(tableData);
  }
  tabela.appendChild(tableRow);
  aux++
};

const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  const price = inputPreco.value;
  const quantity = inputQntd.value;

  if (!item || !price || !quantity) {
    alert("Necessário preencher todos os campos!");
    return;
  }

  let objeto = {descricao: item, preco: price, quantidade: quantity};
  listaItems.push(objeto);
  inputItem.value = ""; 
  inputPreco.value = "";
  inputQntd.value = "";
  inputItem.focus();
  redesenhaLista(tabela, listaItems);

};

const handleBtLimparClick = () => {
  let cont = 1
  while (cont < listaItems.length + 1) {
    document.getElementById("tabela").deleteRow(cont)
  }
}


btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;
