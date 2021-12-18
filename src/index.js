const endPoint = "http://localhost:3000/api/v1/skills"


document.addEventListener('DOMContentLoaded', () => {
  getSkill()
 

  const createSkillForm = document.querySelector("#create-skill-form")
  createSkillForm.addEventListener("submit", (e) => skillFormHandler(e))

});

function getSkill() {
  fetch(endPoint)
  .then(response => response.json())
  .then(skill => {
    skill.data.forEach(skill => {

      const newSkill = new Skill(skill.id, skill.attributes)
    
      document.querySelector('#skill-container').innerHTML += newSkill.renderSkillCard()
    })
  })
}

function skillFormHandler(e) {
  e.preventDefault()

const nameInput = document.querySelector('#name-input').value;
const imageInput = document.querySelector('#image-input').value;
const levelInput = document.querySelector('#level-input').value;
postSkill(nameInput, imageInput, levelInput) 

}

function postSkill(name, image_url, level) {
  const bodyData = {name, image_url, level}

  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(skill => {

    const newSkill = new Skill(skill.data.id, skill.data.attributes)
    document.querySelector('#skill-container').innerHTML += newSkill.renderSkillCard();

  })
}




