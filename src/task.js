class Task{
    constructor(task, taskAttributes){
        this.id = task.id;
        this.description = taskAttributes.description;
        this.point = taskAttributes.point;
        Task.all.push(this);
    }

    static findById(id) {
        return this.all.find(skill => skill.id === id);
      }
    
    
}

Task.all