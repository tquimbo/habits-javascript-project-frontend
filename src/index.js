const endPoint = "http://localhost:3000/api/v1/skills"




// getSkill = () => fetch(this.api + "/skill").then(res => res.json())

// createSkill = (newSkill) => {
//     newSkill.user_id = user.id
//     return fetch(this.api + "/skills", {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newSkill),
//     })
//     .then(response => response.json())
//   }

//   findOrCreateUser = (username) => {
//     return fetch(this.api + "/users", {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({username: username}),
//     })
//     .then(response => response.json())
//   }

// }

document.addEventListener('DOMContentLoaded', () => {
  getSkill()
}

function getSkill() {
  fetch(endPoint)
  .then(response => response.json())
  .then(skill => {
    skill.data.forEach(skill => {
      const newSkill = new Skill(skill, skill.attributes)
    
      document.querySelector('#skill-container').innerHTML += skillMarkup
    })
  })
}


function createFormHandler(e) {
  e.preventDefault()

  const skillInput = document.querySelector('#skill-name').value;
  const skillInput = document.querySelector('#skill-name').value;
  const skillInput = document.querySelector('#skill-name').value;
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
    