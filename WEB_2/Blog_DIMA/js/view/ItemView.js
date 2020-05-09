export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        return `
                <div class='item'>
                <h4>${this.itemModel.title1}</h4>
                <p>${this.itemModel.title2}</p>
                <div>
                    ${this.itemModel.comment.join("<br>")}
                </div>                
                <button data-id="${this.itemModel.id}" class="del-button">Delete</button>
                <button data-id="${this.itemModel.id}" class="update-button">Update</button>
                <button data-id="${this.itemModel.id}" class="add-comment">Add comment</button>
                </div>
                <br>
                `;
    }
}