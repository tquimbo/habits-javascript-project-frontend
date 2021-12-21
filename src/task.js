class Task{
    constructor(task, taskAttributes){
        this.id = task.id;
        this.description = taskAttributes.description;
        this.point = taskAttributes.point;
        this.skill_id = taskAttributes.skill_id;
        Task.all.push(this);
    }

    static findById(id) {
        return this.all.find(task => task.id === id);
      }

        
      renderTaskCard() {
        return `<div task-id="${this.id}" skill-id="${this.skill_id}">
        <p>${this.description}</p> <input type="checkbox" id="description_checkbox" name="description_checkbox" value="description_checkbox">
    </div>`
}

    

       
 }



  


Task.all = [];