import ItemView from './ItemView.js';

export default class ItemListView {
    constructor(itemListModel) {
        this.itemListModel = itemListModel;
        this.controllerOnAddItem = null;
        this.controllerOnDelItem = null;
        this.controllerOnUpdItem = null;
        this.controllerOnAddComItem = null;
        document.querySelector('#my-blog').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
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

    setControllerOnAddComItem(controllerOnAddComItem) {
        this.controllerOnAddComItem = controllerOnAddComItem;
    }

    onClick(e) 
    {
        if (e.target.className === 'del-button') {
            this.controllerOnDelItem(e.target.dataset.id);
            return;
        } 
        if (e.target.className === 'update-button') {
            this.controllerOnUpdItem(e.target.dataset.id);
            return;
        }
        if (e.target.className === 'add-comment') {
            this.controllerOnAddComItem(e.target.dataset.id);
            return;
        }
    }

    onAddItem(e) {
        const title1 = prompt('Enter Title Blog:', '');
        const title2 = prompt('Enter something text:', '');
        this.controllerOnAddItem(title1, title2);
    }

    toHtml() {
        const itemsHtml = this.itemListModel.items.map( (item) => {
            const itemView = new ItemView(item);
            return itemView.toHtml();
        }).join("");
        return `${itemsHtml}
                <br>
                <br>
                ${this.itemListModel.calc()}
                <br>
                <br>
                `;
    }
}