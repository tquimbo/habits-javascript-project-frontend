const skills_url = //localhost:8000/skills

class Skill{

    static all = []

    constructor(data){
        this.data = data
    }

    static find = (id) => this.all.find(skill => skill.data.id == id)

    function skillSubmit() => {
        
    }


function getRooftops() {
        fetch(skills_url)
        .then(response => response.json())
        .then(skills => {
            skills.data.forEach(skill => {
            const newSkill = new Rooftop(skill, skill.attributes)
      
            document.querySelector('#skill-container').innerHTML += newSkill.render()
          })
        }) 
      }

function postRooftops() {
    
}
      


 


}