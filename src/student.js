class Student {
    constructor (name, skillLevel) {
        this.name = name;
        this.skillLevel = skillLevel;

        this.assignments = [];
    }

    study () {
        if (this.skillLevel < 100) {
            this.skillLevel += 1;
        }
        
        return this;
    }

    doHomework (obj) {
        // Complete incompletes when no argument passed
        if (arguments.length == 0) {
            this.doHomework(this.assignments[0])
        }
        else {
            let sL = obj['skillLevel']
            
            // Does the homework
            if (sL < this.skillLevel) {
                obj['completed'] = true;
            }
            else if (sL > this.skillLevel) {
                obj['completed'] = false;
            }

            // Adding homework to assignments if needed
            if (sL === undefined) {
                // pass
            }
            else if (sL > 0 && sL < 100) {
                this.assignments.push(obj);
            }
        }
    }
}

module.exports = Student
