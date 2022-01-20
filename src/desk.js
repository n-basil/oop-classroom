class Desk {
    constructor (length, width, height, isWhiteboard) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.isWhiteboard = isWhiteboard;

        this.content = '';
    }

    write (input) {
        this.content += input;
    }

    wipe () {
        if (this.isWhiteboard === true) {
            this.content = ''
        }
        else if (this.isWhiteboard === false) {
            //pass
        }
    }
}

module.exports = Desk
