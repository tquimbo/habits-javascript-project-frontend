const skills_url = //localhost:3000/api/v1/skills


class Skill{

    static all = []

    constructor(data){
        this.data = data
    }

    static find = (id) => this.all.find(skill => skill.data.id == id)

    function skillSubmit() => {
        
    }

function getSkills() {
        fetch(skills_url)
        .then(response => response.json())
        .then(skills => {
            skills.data.forEach(skill => {
            const newSkill = new Skill(skill, skill.attributes)
      
            document.querySelector('#skill-container').innerHTML += newSkill.render()
          })
        }) 
      }      

function skillFormHanlder(e) {
    e.preventDefault()

  const nameInput = document.querySelector('#name-input').value
  const imageInput = document.querySelector('#image-input').value
  const levelInput = document.querySelector('#level-input').value

  postSkill(nameInput, imageInput, levelInput) 

}

function postSkill(nameInput, imageInput, levelInput) {
    const bodyData = {nameInput, imageInput, levelInput}
  
    fetch(skills_url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(skill => {
      console.log(skill);
  
      const skillData = skill.data
      console.log(skillData)
  
      const newSkill = new Skill(skillData, skillData.attributes)
      console.log(newSkill)
  
      document.querySelector('#skill-container').innerHTML += Skill.render()
  
      createSkillForm.reset();
      slowScroll()
    })
  }
      
}

function createFormHandler(e) {
  e.preventDefault()

  const skillInput = document.querySelector('#skill-name').value;

 

  postSkill(skillInput)
}


function postSkill(name, image_url, experience, level, user_id) {
  const bodyData = {name, image_url, experience, level, user_id}

  fetch(skills_url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(skill => {
    console.log(skill);

    const skillData = skill.data
    console.log(skillData)

    const newSkill = new Skill(skillData, skillData.attributes)
    console.log(newSkill)

    document.querySelector('#skill-container').innerHTML += Skill.render()

    createSkillForm.reset();
    slowScroll()
  })
}
    
}




