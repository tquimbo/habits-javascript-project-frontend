class Habit{

    static all = []

    constructor(data){
        this.data = data
    }

    static find = (id) => this.all.find(habit => habit.data.id == id)


    // function renderShow = () => {
    //   const { description, plus, minus, level, color} = this.data
    //   document.getElementById("main").innerHTML = `
    //   <div class="show">
    //     <h1>${description}</h1>
    //     <p>${plus}</p>
    //     <p>${minus}</p>
    //     <div class="container"></div>
    //   </div>
    //   <button id="goBack">Go Back</button>`
    //   document.getElementById("goBack").addEventListener("click", Habit.renderIndex)
    //   this.apartments.forEach(apartment => apartment.render())
    // }

  //   function showHabit(data){
  //     let main = document.getElementById("main")
  
  //     let habitName = document.createElement('h1')
  //     habitName.setAttribute('id', 'habitname')
  //     habitName.innerHTML += data.name
  //     main.appendChild(habitName)
  
  //     let habitDiv = document.createElement('div')
  //     habitDiv.setAttribute("id", `${data.id}`)
  //     habitDiv.className = "help"
  //     main.appendChild(habitDiv)
  
      
  //     let ID = data.id
  //     Habit.newSongForm(ID)
  // }


function addHabit(habit){
  let main = document.querySelector("habit-description")
  let habitCard = document.createElement("div")
  habitCard.className = "card"
  habitCard.setAttribute("habit-id", habit.id)

  songCard.innerHTML += `
  
  <h3> <strong class="habitDescription">${habit.description} by: </strong> </h3>

  <button class="delete-song-button">Delete Song</button> <br>
  `
  main.appendChild(habitCard)
}
  

    function renderCard = () => {
      const { description, plus, minus,  level, color, id } = this.data
      document.getElementById("habit-container").innerHTML += `
      <div class="habit-card card" data-id=${id}> 
      <p class="title">${description}</p>
      </div>`
  }

    // static renderIndex = () => {
    //     const habitContainer = document.createElement("div")
    //     habitContainer.classList.add("container")
    //     document.getElementById("habit").appendChild(habitContainer)
    //     this.all.forEach(habit => habit.renderCard)
    // }


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
      new Habit(habit).renderCard()
    })
    modal.close()
    e.target.reset()
  }


    static renderIndex = () => {
      const main = document.getElementById("main")
      main.innerHTML = ""
      const habitContainer = document.createElement("div")
      habitContainer.id = "habit-container"
      habitContainer.classList.add("container")
      const addHabit = document.createElement("button")
      addHabit.innerText = "Add a new habit."
      addHabit.addEventListener("click", this.openHabitForm)
      main.append(habitContainer, addHabit
      this.all.forEach(habit => habit.renderCard())
      habitContainer.addEventListener("click", this.handleIndexClick)
    }
  
    
    static getHabits = () => {
        api.getHabits().then(habits => {
          Habit.all = []
          habits.forEach(habit => new Habit(habit))
          this.renderIndex()
        })
      }




}