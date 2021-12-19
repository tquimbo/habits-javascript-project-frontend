class Modal{

    get modal(){
        return document.querySelector("myModal")
    }

    open = () => {
        this.modal.style.display = "block"
      }
    
      close = () => {
        this.modal.style.display = "none"
      }
    

}
// class Modal {

//     constructor(){
//       this.addCloseEventListener()
//     }
  
//     var addTaskButton = document.getElementById("add-task-button");

//     addTaskButton.onclick = function() {
//         modal.style.display = "block";
//       }

//     var modal = document.getElementById("myModal");

      

//     // get modal(){
//     //   return document.querySelector("#myModal")
//     // }
  
//     get main(){
//       return document.getElementById("modal-main")
//     }
  
//     open = () => {
//       this.modal.style.display = "block"
//     }
  
//     close = () => {
//       this.modal.style.display = "none"
//     }
  
//     addCloseEventListener = () => {
//       this.modal.addEventListener("click", (e) => {
//         if (e.target.classList.contains("close") || e.target.id == "myModal"){
//           this.close()
//         }
//       })
//     }
  
//   }