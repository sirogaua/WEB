
export default class itemListModel {
    constructor() {
        this.items = [];
        this.onChangeCallback = null;
    }

    add(item) {
        item.onChangeCallback = this.onChangeCallback;
        this.items.push(item);
    }

    get() {
        function getRandomArrayElements(arr, count) {
            var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(min);
        }
        let arr = getRandomArrayElements(this.items, 4);
        let index = Math.floor(Math.random()*arr.length)
        let item = {
            word: arr[index].title1,
            translate: arr[index].title2,
            translates: new Array()
        }
        for(let i = 0; i < 4; i++) {
            item.translates.push({word: arr[i].title2, isTrue: (index === i)});
        }
        return item;
    }

    delete(itemId) {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        this.items.splice(itemIndex, 1);
    }

    update(itemId) {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        const title1 = prompt('Update English word (if you wanna save before value press enter):', '');
        const title2 = prompt('Update Ukraine word (if you wanna save before value press enter):', '');

        if (title1 == "")
        {
            //save before value
        }
        else
        {
            this.items[itemIndex].title1 = title1;
        }

        if (title2 == "")
        {
            //save before value
        }
        else
        {
            this.items[itemIndex].title2 = title2;
        }
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }

}