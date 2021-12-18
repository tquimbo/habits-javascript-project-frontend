class Task{
    constructor(task, taskAttributes){
        this.id = task.id;
        this.description = taskAttributes.description;
        this.point = taskAttributes.point;
        Task.all.push(this);
    }

    static findById(id) {
        return this.all.find(task => task.id === id);
      }

      renderTaskCard() {
        return `
                <div data-id=${this.id}>
                  <h2>${this.description}</h2> 

                </div>
                <br><br>`;
      }
    
}

Task.all = []