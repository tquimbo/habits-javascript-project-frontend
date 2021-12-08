const api = new ApiService("http://localhost:3000")



getHabits = () => fetch(this.api + "/habits").then(res => res.json())

createHabit = (newHabit) => {
    newHabit.user_id = user.id
    return fetch(this.api + "/habits", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHabit),
    })
    .then(response => response.json())
  }
