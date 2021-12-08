class Habit{

    static all = []

    constructor(data){
        this.data = data
    }

    static find = (id) => this.all.find(habit => habit.data.id == id)

    submitHabit = () => {document.getElementById("habit-description").addEventListener("click", addContainer){

    }}

    addHabits = () => {
      const habitInput = document.querySelector('habit-description').value;
    }

    renderCard = () => {
        const { description, plus, minus,  level, color, id } = this.data
        document.getElementById("habit-container").innerHTML += `
        <div class="habit-card card" data-id=${id}> 
        <p class="title">${description}</p>
        </div>`
    }

    renderShow = () => {
      const { description, plus, minus, level, color} = this.data
      document.getElementById("main").innerHTML = `
      <div class="show">
        <h1>${description}</h1>
        <p>${plus}</p>
        <p>${minus}</p>
        <div class="container"></div>
      </div>
      <button id="goBack">Go Back</button>
      `
      document.getElementById("goBack").addEventListener("click", Habit.renderIndex)
      this.apartments.forEach(apartment => apartment.render())
    }

    static renderIndex = () => {
        const habitContainer = document.createElement("div")
        habitContainer.classList.add("container")
        document.getElementById("habit").appendChild(habitContainer)
        this.all.forEach(habit => habit.renderCard)
    }
    
    static getHabits = () => {
        api.getHabits().then(habits => {
          Habit.all = []
          habits.forEach(habit => new Habit(habit))
          this.renderIndex()
        })
      }


  static handleSubmit = (e) => {
    e.preventDefault()
    const newHabit = {
      description: e.target.name.value,
      plus: e.target.plus.value,
      minus: e.target.minus.value,
      level: e.target.level.value,
      color: e.target.color.value,
    }
    api.createHabit(newHabit).then(habit => {
      new House(habit).renderCard()
    })
    modal.close()
    e.target.reset()
  }


}