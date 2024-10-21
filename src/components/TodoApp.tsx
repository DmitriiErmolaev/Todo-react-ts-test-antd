import TodoAppTitle from './TodoAppTitle';
import TaskList from './TaskList';
import NewTaskPanel from './NewTaskPanel';
import ToolsPanel from './ToolsPanel';
import TasksProvider from '../Providers/TasksProvider';

function TodoApp() {
  return (
    <div className="wrapper">
      <div className="TodoApp">
        <TasksProvider>
          <>
            <TodoAppTitle />
            <div className='TodoApp__body'>
              <NewTaskPanel />
              <TaskList />
              <ToolsPanel />
            </div>
          </>
        </TasksProvider>
      </div>
    </div>
  );
}

export default TodoApp;