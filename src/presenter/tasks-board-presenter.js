import TasksListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/task-area-component.js';
import {render} from '../framework/render.js';



export default class TasksBoardPresenter {
 tasksBoardComponent = new TaskBoardComponent()
 taskListComponent = new TasksListComponent()
 

 constructor({boardContainer, tasksModel}) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
  }
 
  init() {
    render(this.tasksBoardComponent, this.boardContainer);

    this.tasksModel.getTasks().forEach((taskboard, index) => {
      const tasksListComponent = new TasksListComponent(taskboard.name);
      render(tasksListComponent, this.tasksBoardComponent.getElement());

      taskboard.tasks.forEach(task => {
        const taskComponent = new TaskComponent(task);
        render(taskComponent, tasksListComponent.getElement());
      });
      
      if (index === this.tasksModel.getTasks().length - 1) {
        const clearButton = document.createElement('button');
        clearButton.classList.add('clear-button');
        clearButton.innerHTML = 'X Очистить';
        tasksListComponent.getElement().appendChild(clearButton);
      }
    });
  }
}