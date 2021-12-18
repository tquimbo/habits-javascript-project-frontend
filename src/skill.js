class Skill{
  constructor(skill, skillAttributes) {
    this.id = skill.id;
    this.name = skillAttributes.name;
    this.image_url = skillAttributes.image_url;
    this.level = skillAttributes.level;
    this.experience = skillAttributes.experience;
    Skill.all.push(this);
  }


  // renderSyllabusCard() {
  //   return `
  //     <div class="col-md-4">
  //       <div class="card mb-4 shadow-sm">
  //         <img src=${this.image_url} class="card-img-top" alt="...">
  //         <div class="card-body">
  //           <h5 class="card-title">${this.name}</h5>
  //           <div class="d-flex justify-content-between align-items-center">
  //             <div class="btn-group">
  //               <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //               <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   `
  // }

  renderSkillCard() {
    return `
            <div data-id=${this.id}>
              <h2>${this.name}</h2> 
              <img src=${this.image_url} height="100" width="150">
              <button id="myBtn">Add Task</button>
            </div>
            <br><br>`;
  }


  static findById(id) {
    return this.all.find(skill => skill.id === id);
  }

}


Skill.all = [];