class Skill{
  constructor(skill, skillAttributes) {
    this.id = skill;
    this.name = skillAttributes.name;
    this.image_url = skillAttributes.image_url;
    this.level = skillAttributes.level;
    this.experience = skillAttributes.experience;
    this.task = skillAttributes.task;
    Skill.all.push(this);
  }

  // const onClick = (event) => {
  //   if (event.target.nodeName === 'BUTTON') {
  //     console.log(event.target.id);
  //   }
  // }
  // window.addEventListener('click', onClick);

  // let element = document.querySelector("#add-task-button")[0];
  // let id = element.id;

  function reply_click(clicked_id)
  {
      alert(clicked_id);
  }





  renderSkillCard() {


    return `
            <div class=skill-id value=${this.id}>
              <h2>${this.name}</h2> 
              <img src=${this.image_url} height="100" width="150">
              <button onclick="reply_click(this.id)" class="add-task-button" id=${this.id} >Add Task</button> <br>
              <button class="view-tasks-button">View Tasks</button> <br>
              <button id="edit-skill-button">Edit Skill</button> <br>
              <button id="delete-skill-button">Delete Skill</button> <br>  
              <div style="position:relative;">
              <img style="position:absolute; top:100 px; bottom: 100 px" >
            </div>        
            </div>
            <br>`;

          //   function a(){
          //     modal.open();
          // }
          // function b(){
          //   getId(btn){alert(btn.id);;
          // }
          

            
            
  }

  // function getId(btn){alert(btn.id);}


  static findSkillID(id) {
    return this.all.find(skill => skill.id === id);
  }


// const skill_id = Skill.all.find(skill => skill.id  === id);

}


Skill.all = [];