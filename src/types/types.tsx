// components
export interface ITaskListItem {
  index: number,
  completed: boolean,
  text: string,
}

// data
export type TaskFilters = 'all' | 'completed' | 'uncompleted';

export interface ITask {
  id: string,
  completed: boolean,
  text: string,
}

export interface IFilters {
  all: () => boolean,
  completed: (task: ITask) => boolean,
  uncompleted: (task: ITask) => boolean,
}

//functions
export type ToggleTask = (index: number) => void;
export type AddNewTask = (newTask: string) => void;
export type EditTask = (text: string, index: number) => void;
export type ApplyFilter = (buttonId: TaskFilters) => void;

// contexts
export type ITasksContext = {
  tasks: ITask[],
}
export type IUpdateTasksContext = {
  editTask: EditTask,
  addNewTask: AddNewTask,
  toggleTask: ToggleTask,
  clearCompleted: () => void,
  applyFilter: ApplyFilter,
}
export type IToggleAllContext = {
  toggleAll: () => void
}
