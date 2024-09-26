import {createElement} from '../framework/render.js';



function createTaskListComponentTemplate(name)  {
   
  return (
      
       `<div class="task-baclog">
        <ul> <h1>${name}</h1>
        </ul>
      </div> ` 
           );
}


export default class TaskListComponent {
  constructor( name) {
    this.name = name;
  }
  getTemplate() {
    return createTaskListComponentTemplate(this.name);
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}