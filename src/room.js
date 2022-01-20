class Room {
    constructor (name, description) {
        this.name = name;
        this.description = description;

        this.contents = [];
    }

    add (item) {
        this.contents.push(item);
        return this; //makes the function chainable
    }

    has (item) {
        //this.contents.includes(item)? true:false;
        if (this.contents.includes(item)) {
            return true;
        }
        else if (!this.contents.includes(item)) {
            return false;
        }
    }
}

module.exports = Room
