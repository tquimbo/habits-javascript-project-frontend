class Task{
    constructor(task, taskAttributes){
        this.id = task.id;
        this.description = taskAttributes.description;
        this.point = taskAttributes.point;
        this.skill_id = taskAttributes.skill_id;
        Task.all.push(this);
    }

    static findById(id) {
        return this.all.find(task => task.id === id);
      }

    //   renderTaskCard() {
    //     modal.open()
    //     modal.main.innerHTML = ""
    //     const taskList = document.createElement("ul")
    //     modal.main.appendChild(taskList)
    //     this.tasks.forEach(task => { taskList.innerHTML +=`<li>${task.data.description}</li>`
    //      })
    //     }

        
      renderTaskCard() {
        return `<div class="card" song-id="${this.id}">
        <h3><strong class="song-name">${this.name} by: </strong></h3> 
        <h3><strong class="song-name">${this.artist}</strong></h3>
        <h3><strong class="song-name">${this.genre}</strong></h3>
        <button class="delete-song-button">Delete Song</button> <br>
    </div>
`
        }


       
        // return `
        
        //         <div data-id=${this.id}>
        //           <h2>${this.description}</h2> 

        //         </div>
        //         <br><br>`;
      }



  


Task.all = []