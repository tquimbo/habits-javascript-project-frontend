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
              <button id="create-task-form"">Add Task</button>
              <button id="edit-skill">Edit Skill</button>
            </div>
            <br><br>`;
  }


  static findById(id) {
    return this.all.find(skill => skill.id === id);
  }

}


Skill.all = [];