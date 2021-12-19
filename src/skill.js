class Skill{
  constructor(skill, skillAttributes) {
    this.id = skill.id;
    this.name = skillAttributes.name;
    this.image_url = skillAttributes.image_url;
    this.level = skillAttributes.level;
    this.experience = skillAttributes.experience;
    Skill.all.push(this);
  }


  renderSkillCard() {
    return `
            <div data-id=${this.id}>
              <h2>${this.name}</h2> 
              <img src=${this.image_url} height="100" width="150">
              <button id="add-task-button">Add Task</button> <br>
              <button id="view-task-button">View Task</button> <br>
              <button id="view-task-button">Edit Skill</button> <br>
              <button id="delete-task-button">Delete Skill</button> <br>
          
              
              
            
            </div>
<div> 

            <br><br>`;
            
  }


  static findById(id) {
    return this.all.find(skill => skill.id === id);
  }

}


Skill.all = [];