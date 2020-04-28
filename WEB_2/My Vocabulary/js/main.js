import ItemListModel from './model/ItemListModel.js';
import ItemListView from './view/ItemListView.js';
import Controller from './controller/Controller.js';
import Item from './model/Item.js';

let myWorker = new Worker("js/worker.js");
let itemListModel = new ItemListModel();
let itemListView = new ItemListView(itemListModel);

let controller = new Controller(itemListModel, itemListView, myWorker);

controller.addItem('First', 'Перший');
controller.addItem('Second', 'Другий');
controller.addItem('Ice', 'Лід');
controller.addItem('Good', 'Добре');
controller.addItem('Yes', 'Так');
controller.addItem('No', 'Ні');
controller.addItem('Very', 'Дуже');
controller.addItem('Year', 'Рік');


//itemListModel.delete(item1.id);
//itemListModel.toggleDone([item2.id]);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var btnClose = document.getElementById("btnClose");

var btnOk = document.getElementById("btnOk");

let item;

let translates = document.getElementById("translates");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  item = controller.getItem();
  let testWord = document.getElementById("testWord");
  let innerHTML;
  for(let i = 0; i < item.translates.length; i++) {
    innerHTML += `<option value=${item.translates[i].word}>${item.translates[i].word}</option>`
  }
  translates.innerHTML = innerHTML;
  testWord.innerHTML = item.word;
  modal.style.display = "block";
}

btnOk.onclick = function() {
    modal.style.display = "none";
    let isTrue = (translates.value === item.translate)
    if(isTrue)
        alert("Correct");
    else 
        alert("Wrong answer");
    myWorker.postMessage(isTrue)
}

btnClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

