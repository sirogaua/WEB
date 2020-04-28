import ItemView from './ItemView.js';

export default class ItemListView {
    constructor(itemListModel) {
        this.itemListModel = itemListModel;
        this.controllerOnAddItem = null;
        this.controllerOnDelItem = null;
        this.controllerOnUpdItem = null;
        document.querySelector('#my-voc').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
    }

    setControllerOnAddItem(controllerOnAddItem) {
        this.controllerOnAddItem = controllerOnAddItem;
    }

    setControllerOnDelItem(controllerOnDelItem) {
        this.controllerOnDelItem = controllerOnDelItem;
    }

    setControllerOnUpdItem(controllerOnUpdItem) {
        this.controllerOnUpdItem = controllerOnUpdItem;
    }

    onClick(e) {
        if (e.target.className === 'del-button') {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        } 
        if (e.target.className === 'update-button') {
            this.controllerOnUpdItem(e.target.dataset.id);
            return;
        }
    }

    onAddItem(e) {
        const title1 = prompt('Enter English word:', '');
        const title2 = prompt('Enter Ukraine word:', '');
        this.controllerOnAddItem(title1, title2);
    }

    toHtml() {
        const itemsHtml = this.itemListModel.items.map( (item) => {
            const itemView = new ItemView(item);
            return itemView.toHtml();
        }).join("");
        return `<table border="1"><tr><th>English Word</th><th>Ukraine Word</th><th>Operation</th></tr>${itemsHtml}</table>`;
    }
}