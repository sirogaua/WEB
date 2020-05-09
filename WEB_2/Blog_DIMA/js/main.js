import ItemListModel from './model/ItemListModel.js';
import ItemListView from './view/ItemListView.js';
import Controller from './controller/Controller.js';

let myWorker = new Worker("js/worker.js");
let itemListModel = new ItemListModel();
let itemListView = new ItemListView(itemListModel);

let controller = new Controller(itemListModel, itemListView, myWorker);

controller.addItem('Blog title1', 'We are people and everyone should remember it!');
