const endPoint = "http://localhost:3000/api/v1/skills"


document.addEventListener('DOMContentLoaded', () => {
  getSkill()
 

  const createSkillForm = document.querySelector("#create-skill-form")
  createSkillForm.addEventListener("submit", (e) => skillFormHandler(e))

});
// document.addEventListener('DOMContentLoaded', () => {
//   alert('LOADED');
// });

function getSkill() {
  fetch(endPoint)
  .then(response => response.json())
  .then(skill => {
    skill.data.forEach(skill => {
      // console.log(skill);

      const newSkill = new Skill(skill.id, skill.attributes)
    
      document.querySelector('#skill-container').innerHTML += newSkill.renderSkillCard()
    })
  })
}


// function getSkill() {
//   fetch(endPoint)
//   .then(response => response.json())
//   .then(skill => {
//     skill.data.forEach(skill => {

//       const skillMarkup = `
//           <div data-id=${skill.id}
//             <h3>${skill.attributes.name}</h3>
//           </div>
//           <br><br>`;

    
//       document.querySelector('#skill-container').innerHTML += skillMarkup
//     })
//   })
// }

function skillFormHandler(e) {
  e.preventDefault()

const nameInput = document.querySelector('#name-input').value;
const imageInput = document.querySelector('#image-input').value;
const levelInput = document.querySelector('#level-input').value;
postSkill(nameInput, imageInput, levelInput) 

}


// function postSkill(name, image_url, level) {
//   const bodyData = {name, image_url, level}

//   fetch(endPoint, {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(bodyData)
//   })
//   .then(response => response.json())
//   .then(skill => {
//     console.log(skill);

//     const skillData = skill.data
//     console.log(skillData)

//     const newSkill = new Skill(skillData, skillData.attributes)
//     console.log(newSkill)

//     document.querySelector('#skill-container').innerHTML += newSkill.render()

//     createSkillForm.reset();
//     slowScroll()
//   }

// function postSkill(name, image_url, level) {
//   const bodyData = {name, image_url, level}

//   fetch(endPoint, {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(bodyData)
//   })
//   .then(response => response.json())
//   .then(skill => {
//     console.log(skill);
//     const skillData = skill.data
    
//     const skillMarkup = `
//     <div data-id=${skill.id}>
//       <img src=${skillData.attributes.image_url} height="200" width="250">
//       <h3>${skillData.attributes.name}</h3>
//       <p>${skillData.attributes.level}</p>
//       </div>
//       <br><br>`;


//     document.querySelector('#skill-container').innerHTML += skillMarkup
    
//   })

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




