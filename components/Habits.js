class Habit{

    constructor(data){
        this.data = data
    }

    static find = (id) => this.all.find(habit => habit.data.id == id)


    static addHabit(habit){
        new Habit(habit)
    }

    static getHabits = () => {
        api.getHabits().then(habits => {
          Habit.all = []
          habits.forEach(habit => new Habit(habit))
          this.renderIndex()
        })
      }
    

}