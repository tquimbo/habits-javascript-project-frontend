const endPoint = "http://localhost:3000/api/v1/skills"
const modal = new Modal()




document.addEventListener('DOMContentLoaded', () => {
  getSkill()
 
  const createSkillForm = document.querySelector("#create-skill-form")
  createSkillForm.addEventListener("submit", (e) => skillFormHandler(e))

  // const addTask = document.querySelector("add-task-button")
  // addTask.addEventListener("click", modal.open)

  // const addTask = document.querySelector("add-task-button")
  // addTask.addEventListener("click", (e) => taskFormHandler(e))

  // const createTaskForm = document.querySelector("#create-task-form")
  // createTaskForm.addEventListener("submit", (e) => taskFormHandler(e))

  // const submitTaskDescription = document.querySelector("#create-task-form")
  // submitTaskDescription.addEventListener("submit", (e) => taskFormHandler(e))

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
postSkill(nameInput, imageInput) 

}

function postSkill(name, image_url) {
  const bodyData = {name, image_url}

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

function getTask() {
  fetch(endPoint)
  .then(response => response.json())
  .then(task => {
    task.data.forEach(task => {

      const newTask = new Task(task.id, task.attributes)
    
      document.querySelector('#task-container').innerHTML += newTask.renderTaskCard()
    })
  })
}

function taskFormHandler(e) {
  e.preventDefault()

const descriptionInput = document.querySelector('#description-input').value;
postTask(descriptionInput) 

}

function postTask(description) {
  const bodyData = {description}

  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(task => {

    const newTask = new Task(task.data.id, task.data.attributes)
    document.querySelector('#task-container').innerHTML += newTask.renderTaskCard();

  })
}

