class Habit{

    constructor(data){
        this.data = data
    }

    static find = (id) => this.all.find(habit => habit.data.id == id)


    static addHabit(habit){
        new Habit(habit)
    }

    static renderIndex = () => {
        const habitContainer = document.createElement("div")
        habitContainer.classList.add("container")
        document.getElementById("main".appendChild(habitContainer))
    }
    
    static getHabits = () => {
        api.getHabits().then(habits => {
          Habit.all = []
          habits.forEach(habit => Habit.add(habit))
          this.renderIndex()
        })
      }
    

}