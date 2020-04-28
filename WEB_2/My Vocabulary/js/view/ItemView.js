export default class ItemView {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }

    toHtml() {
        return `
            <tr>
                <td style="color: black">
                    ${this.itemModel.title1}
                </td>
                <td style="color: black">
                    ${this.itemModel.title2}                    
                </td>
                <td>
                    <button data-id="${this.itemModel.id}" class="del-button">Delete</button>
                    <button data-id="${this.itemModel.id}" class="update-button">Update</button>
                </td>
            </tr>`;
    }
}