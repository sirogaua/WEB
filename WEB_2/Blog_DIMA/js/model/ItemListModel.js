
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

    update(itemId) 
    {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        const title1 = prompt('Update Title Blog (if you wanna save before value press enter):', '');
        const title2 = prompt('Update Text Blog (if you wanna save before value press enter):', '');

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

    addcomment(itemId) 
    {
        const itemIndex = this.items.findIndex( (item) => item.id === itemId);
        const Who = prompt('Enter your name: ', '');
        const comment = prompt('Enter comment: ', '');

        this.items[itemIndex].comment.push("<div style=\"border: solid 1px red;\"><h4 style=\"color: blue\">" + Who + "</h4><p>" + comment + "</p></div>");
        this.items[itemIndex].onChangeCallback = this.onChangeCallback;
    }

    calc()
    {
        var str = "<h3>Statistics:</h3>";
        for (let index = 0; index < this.items.length; index++) 
        {
            str = str + "<h4 style=\"color: red\">" +this.items[index].title1 + ": <p style=\"color: green\">" + this.items[index].comment.length + "</p></h4><br>";

        }
        return str;
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }

}