let Repo = require('./taskRepository');

class Task {
    constructor(data) {
        this.name = data.name;
        this.completed = false;
    }

    complete() {
        console.log(`completing task: ${this.name}`);
        this.completed = true;
    };

    save() {
        console.log(`saving task: ${this.name}`);
        Repo.save(this);
    }
}

module.exports = Task;