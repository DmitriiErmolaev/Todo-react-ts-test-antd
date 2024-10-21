import TaskListItem from './TaskListItem';
import { useTasks } from '../Providers/TasksProvider';

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    tasks.length ? (
      <ul>
        {tasks.map((task, index) => (
          <TaskListItem key={task.id} index={index} completed={task.completed} text={task.text}/>
        ))}
      </ul>
    ) : null
  );
};

export default TaskList;