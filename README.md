# amused-crime

### 1. Project Setup:
- Begin by creating a new Angular project using the Angular CLI (ng new todo-app).
- Navigate into the project directory (cd todo-app).

### 2. Components:
- Create the necessary components for your To-Do app:
- TaskListComponent: Display a list of tasks.
- TaskFormComponent: Allow users to add new tasks.
- TaskItemComponent: Represent individual tasks.

### 3. Service:
- Develop a service (e.g., TaskService) to manage tasks:
- Maintain an array of tasks.
- Implement methods for adding, updating, and deleting tasks.

### 4. Routing:
- Set up routing to navigate between different views:
- Define routes for the task list and task form.
- Use the Angular Router to handle navigation.

### 5. Task Model:
- Create an interface (e.g., Task) to define the structure of a task:
- TypeScript
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

### 6. Task List View:
- In the TaskListComponent, retrieve tasks from the service.
- Display tasks in a list format.
- Include buttons to mark tasks as complete or delete them.

### 7. Task Form View:
- In the TaskFormComponent, allow users to input task details.
- Validate user input (e.g., required fields).
- Add new tasks to the task list.

### 8. Styling and UI:
- Apply CSS or use a UI library (e.g., Angular Material) for a polished look.
- Use responsive design to ensure the app works well on various devices.

### 9. Persistence:
- Consider using local storage or a backend API to persist tasks.
- Implement methods in the TaskService to save and retrieve tasks.
