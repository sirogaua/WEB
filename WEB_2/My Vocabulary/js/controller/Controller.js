import Item from "../model/Item.js";

export default class Controller {
    constructor(itemListModel, itemListView, worker) {
        this.worker = worker;
        this.itemListModel = itemListModel;
        this.itemListView = itemListView;
        this.itemListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.itemListView.setControllerOnAddItem(this.addItem);
        this.itemListView.setControllerOnDelItem(this.delItem);
        this.itemListView.setControllerOnUpdItem(this.updItem);
        this.initOnModelChange();
        this.worker.onmessage = (e) => {
            document.getElementById("statistic").innerHTML = e.data;
        }        
        document.querySelector('#add-item').addEventListener('click', (e)=>itemListView.onAddItem(e));
}

    onChangeCallback() {
        /* updates UI when a model has changed (title, done attributes) */
        document.querySelector('#my-voc').innerHTML = this.itemListView.toHtml();
    }
    
    getItem() {
        return this.itemListModel.get();
    }

    addItem(title1, title2) {
        const item = new Item(title1, title2);
        this.itemListModel.add(item);
    }

    delItem(id) { 
        this.itemListModel.delete(id);
    }

    updItem(id) { 
        this.itemListModel.update(id);
    }

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#my-voc').innerHTML = this.itemListView.toHtml();
                return true;
            }
        }
        this.itemListModel.items = new Proxy(this.itemListModel.items, handler);
    }
}