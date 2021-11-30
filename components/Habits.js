class Habit{

    constructor(data){
        this.data = data
    }

    static find = (id) => this.all.find(habit => habit.data.id == id)

    renderCard = () => {
        const { description, plus, minus,  level, color, id } = this.data
        document.getElementById("habit-container").innerHTML += `
        <div class="house-card card" data-id=${id}> 
        <p class="title">${description}</p>
        </div>`
    }


    static renderIndex = () => {
        const habitContainer = document.createElement("div")
        habitContainer.classList.add("container")
        document.getElementById("main").appendChild(habitContainer)
        this.all.forEach(habit => habit.renderCard)
    }
    
    static getHabits = () => {
        api.getHabits().then(habits => {
          Habit.all = []
          habits.forEach(habit => new Habit(habit))
          this.renderIndex()
        })
      }
    

}