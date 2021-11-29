class ApiService{

    constructor(api){
        this.api =
    }

   
  getHabits = () => fetch(this.api + "/habits").then(res => res.json())

}