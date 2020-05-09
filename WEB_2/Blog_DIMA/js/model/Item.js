export default class Item {
    constructor(title1, title2) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.title1 = title1;
        this.title2 = title2;
        this.comment = [];

        this.onChangeCallback = null;
        return this.initOnModelChange();
    }
    
    setOnChangeCallback() {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }
}