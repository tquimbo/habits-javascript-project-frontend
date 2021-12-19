class Task{
    constructor(task, taskAttributes){
        this.id = task.id;
        this.description = taskAttributes.description;
        this.point = taskAttributes.point;
        Task.all.push(this);
    }

    static findById(id) {
        return this.all.find(task => task.id === id);
      }

      renderTaskCard() {
        modal.open()
        modal.main.innerHTML = ""
        const taskList = document.createElement("ul")
        modal.main.appendChild(taskList)
        this.tasks.forEach(task => { taskList.innerHTML +=`<li>${task.data.description}</li>`
         })
        }

       
        // return `
        
        //         <div data-id=${this.id}>
        //           <h2>${this.description}</h2> 

        //         </div>
        //         <br><br>`;
      }
    
}

Task.all = []