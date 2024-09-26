import {createElement} from '../framework/render.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<form class="form">
        <div class="form_title">Новая задача</div>
        <input class="form_text" placeholder="Название задачи...">
        <button class="button_blue"> + Добавить </button>
      </form>`
      );
}


export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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

