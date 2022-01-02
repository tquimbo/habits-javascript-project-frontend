const endPoint = "http://localhost:3000/api/v1/skills"
const endPointT = "http://localhost:3000/api/v1/tasks"
const modal = new Modal()


    document.addEventListener('DOMContentLoaded', () => {
      getSkill()
      getTask()
    
      const createSkillForm = document.querySelector("#create-skill-form");
      createSkillForm.addEventListener("submit", (e) => skillFormHandler(e))


    var closeTask = document.getElementsByClassName("close")[0];
    closeTask.addEventListener("click", (e) => {modal.close()})
    

    const submitTask = document.querySelector("#create-task-form");
    submitTask.addEventListener("submit", (e) => taskFormHandler(e))

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


    // function newTaskForm(data){
    //     let newTaskForm = document.getElementById('task-form-group')
    //     newTaskForm.innerHTML += `
    //     <form onsubmit="postTask(); return false;">
    //             <label>Task Description: </label>
    //                 <input id="description-input" placeholder="Description"></input>
    //             <input type="hidden" id="${data}"></input>
    //             <input type="submit" value="Create Task">
    //     </form>
    //     <br> `  
    // }


    function getTask() {
      fetch(endPointT)
      .then(response => response.json())
      .then(task => {
        task.data.forEach(task => {

          const newTask = new Task(task.id, task.attributes)
        
          document.querySelector('#task-container').innerHTML += newTask.renderTaskCard();
        })
      })
    }



    function taskFormHandler(e) {
      e.preventDefault()

    const descriptionInput = document.querySelector('#description-input').value;
    const skill_id = document.getElementById("add-task-button").parentElement.getAttribute('value');
    // const skill_id = document.getElementById("add-task-button").onclick.target.parentElement.getAttribute('value');
    // const skill_id = document.querySelector(".skill-id").getAttribute('value')
    // addTask.addEventListener("click", (e) => skill_id);
    // let skill_id = addTaskHandler.parentElement.getAttribute('value').value;
    // const skill_id  = findById(id);
    // debugger
    // const skill_id = document.getElementById("skill-id")
    // const skill_id = findById(id)
    // const skill_id = document.querySelector('#skill-id').getAttributeNode('id');

      // const skill_id = document.getElementsByClassName('skill-id').getAttributeNode('value');


    postTask(descriptionInput, skill_id) 
    }

    function postTask(description, skill_id) {
      const bodyData = {description, skill_id}
      
      fetch(endPointT, {
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

// var addTask = document.getElementById("add-task-button");
// addTask.onclick = modal.open()
// var addTaskButton = document.querySelector("add-task-button");
// addTaskButton.addEventListener("click", (e) => {modal.open()})

// var skillID = addTask.parentElement.nodeName;
// debugger
// let skillID = addTask.parentElement.getAttribute('skill-id')

   




// document.getElementById("skill-id");
