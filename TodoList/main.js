function Tasks(input, todosWrapper) {
    this.complete = 'js--complete';
    this.remove = 'js--delete';
    this.input = document.querySelector(input);
    this.todosWrapper = document.querySelector(todosWrapper);
    this.addTask = (event) => {
        event.preventDefault();
        const value = this.input.value;
        this.input.value = '';
        const item = this.renderTemplate(value);
        this.todosWrapper.insertAdjacentHTML('afterbegin', item);

        document.querySelectorAll(`.${this.complete}`).forEach((checkboxItem) => {
            checkboxItem.addEventListener('click', this.completeTask);
        });

        document.querySelectorAll(`.${this.remove}`).forEach((removeItem) => {
            removeItem.addEventListener('click', this.removeTask);
        });
    };
    this.renderTemplate = (description) => {
        return `
        <label class="todo-item">
            <input type="checkbox" class="js--complete">
            <div class="todo-item__desc">${description}</div>
            <button class="todo-item__delete js--delete">Видалити</button>
        </label>
        `;
    };
    this.completeTask = function () {
        this.parentNode.classList.toggle('todo-item__desc--underline');
    };
    this.removeTask = function () {
        this.parentNode.remove()
    }
}

const task = new Tasks('.js--form__input', '.js--todos-wrapper');
document.querySelector('.js--form').addEventListener('submit', task.addTask);
