class Skill{
  constructor(skill, skillAttributes) {
    this.id = skill;
    this.name = skillAttributes.name;
    this.image_url = skillAttributes.image_url;
    this.level = skillAttributes.level;
    this.experience = skillAttributes.experience;
    Skill.all.push(this);
  }



  renderSkillCard() {
    return `
            <div id="skill-id"=${this.id}>
              <h2>${this.name}</h2> 
              <img src=${this.image_url} height="100" width="150">
              <button  onclick="modal.open()" id="add-task-button">Add Task</button> <br>
              <button class="view-tasks-button">View Tasks</button> <br>
              <button id="edit-skill-button">Edit Skill</button> <br>
              <button id="delete-skill-button">Delete Skill</button> <br>  
              <div style="position:relative;">
              <img style="position:absolute; top:100 px; bottom: 100 px" >
            </div>        
            </div>
            <br>`;
            
  }


  static findById(id) {
    return this.all.find(skill => skill.id === id);
  }


// const skill_id = Skill.all.find(skill => skill.id  === id);

}


Skill.all = [];