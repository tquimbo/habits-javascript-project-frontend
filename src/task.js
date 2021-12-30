class Task{
    constructor(task, taskAttributes){
        this.id = task.id;
        this.description = taskAttributes.description;
        this.point = taskAttributes.point;
        this.skill = taskAttributes.skill;
       
        // this.skill_id = taskAttributes.skill.id;
        // this.skill_id = taskAttributes.attributes.skill.id
        
        
        Task.all.push(this);
    }

    static findById(id) {
        return this.all.find(task => task.id === id);
      }

      static findBySkillId(id) {
        return this.all.find(skill => taskAttributes.skill === skill.id);
      }

      renderTaskCard() {
          
        return `<div task-id="${this.id} skill-id=${this.skill}">
        <p>${this.description} <input type="checkbox" id="description_checkbox" name="description_checkbox" value="description_checkbox"></p>
      </div>`
      }
      

     

      
// renderTaskCard() {
//     let main = document.querySelector("task-container")
//     let taskCard = document.createElement("div")
//     taskCard.className = "card"

//     taskCard.innerHTML += `<div task-id="${this.id}" skill-id="${this.skill_id}">
//     <p>${this.description} <input type="checkbox" id="description_checkbox" name="description_checkbox" value="description_checkbox"></p>
// </div>`
// main.appendChild(taskCard)

// }
    

       
 }



  


Task.all = [];