class Marker {
    constructor (size, color, remainingInk) {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }

    write (input) {
        let output = ''

        for (let i = 0; i < input.length; i++) {
            //console.log("Current input letter: " + input[i]);
            // We have ink and its a letter, so take away one ink
            if ((this.remainingInk > 0) && (input.charAt(i) !== ' ')) {
                output += input[i];
                //console.log("Output is now: " + output);
                this.remainingInk -= 1;
                //console.log("Ink is now: " + this.remainingInk);
            }
            // We have no ink, but its a space, so we can still print
            else if ((this.remainingInk === 0) && (input.charAt(i) === ' ')) {
                output += input[i];
                //console.log("Output is now: " + output);
            }
            //We have ink, and its a space, so we don't remove ink
            else if ((this.remainingInk > 0) && (input.charAt(i) === ' ')) {
                output += input[i];
                //console.log("Output is now: " + output);
            }
            // We have no ink and its a letter, so we return the output
            else if ((this.remainingInk === 0 ) && (input.charAt(i) !== ' ')) {
                // pass
            }
        }

        return output;
    }
}

module.exports = Marker
