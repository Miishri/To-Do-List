import 'normalize.css';

function createTodo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    getTitle() {
      return this.title;
    },
    getDescription() {
      return this.description;
    },
    getDueDate() {
      return this.dueDate;
    },
    getPriority() {
      return this.priority;
    },
    setTitle(title) {
      this.title = title;
    },
    setDescription(description) {
      this.description = description;
    }
  };
}

const add = document.querySelector('.add');

add.addEventListener('click', () => {
  
});
