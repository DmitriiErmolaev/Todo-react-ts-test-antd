import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { AddNewTask, ApplyFilter, EditTask, IFilters, ITask, ITasksContext, IToggleAllContext, IUpdateTasksContext, TaskFilters, ToggleTask } from '../types/types';

const filters: IFilters = {
  all: () => true,
  completed: task => task.completed,
  uncompleted: task => !task.completed,
}

const TasksContext = createContext<ITasksContext | null>(null);
const UpdateTasksContext= createContext<IUpdateTasksContext | null>(null);
const FilterContext= createContext<TaskFilters | null>(null);
const ToggleAllContext = createContext<IToggleAllContext | null>(null);
const ItemsLeftContext = createContext<number | null>(null);
const HasTasksContext = createContext<boolean | null>(null);

const TasksProvider = ({children}:{children: React.ReactElement}) => {
  const [ filter, setFilter ] = useState<TaskFilters>('all');
  const [ tasks, setTasks ] = useState<ITask[]>([]);
  const [ allToggled, setAllToggled ] = useState(false);
  const filteredTasks = tasks.filter(filters[filter]);

  const editTask: EditTask = useCallback((text, index) => {
    setTasks(prev => {
      return [
        ...prev.slice(0,index),
        {...prev[index], text: text},
        ...prev.slice(index+1),
      ]
    })
  },[])

  const addNewTask: AddNewTask = useCallback((newTask) => {
    setTasks(prev => [...prev, {
      id: new Date().toISOString(),
      text: newTask,
      completed: false,
    }])
  }, [])

  const toggleTask: ToggleTask = useCallback((index) => {
    setTasks(prev => [...prev.slice(0,index), {...prev[index], completed: !prev[index].completed}, ...prev.slice(index+1)])
  },[])

  const clearCompleted: () => void = useCallback(() => {
    setTasks(prev => prev.filter(task => !task.completed));
  },[])

  const applyFilter: ApplyFilter = useCallback((buttonId) => {
    setFilter(buttonId)
  },[])

  const toggleAll: () => void = useCallback(() => {
    if(!allToggled) {
      setTasks(prev => prev.map(task => ({...task, completed: true})));
      setAllToggled(true)
      return
    }
    setTasks(prev => prev.map(task => ({...task, completed: false})));
    setAllToggled(false)
  }, [allToggled])

  const itemsLeft = useMemo(() => {
    return  tasks.filter(task => !task.completed).length;
  },[tasks])

  const tasksContext = useMemo(() => {
    return {
      tasks: filteredTasks,
    }
  },[filteredTasks])

  const toggleAllContext = useMemo(() => {
    return {
      toggleAll,
    }
  }, [toggleAll])

  const updateTasksContext: IUpdateTasksContext = useMemo(() => {
    return {
      editTask,
      addNewTask,
      toggleTask,
      clearCompleted,
      applyFilter,
    }
  }, [addNewTask, applyFilter, clearCompleted, editTask, toggleTask])

  const hasTasks = useMemo(() => {
    return !!tasks.length
  }, [tasks.length])

  return (
    <TasksContext.Provider value={tasksContext}>
      <UpdateTasksContext.Provider value={updateTasksContext}>
        <FilterContext.Provider value={filter}>
          <ToggleAllContext.Provider value={toggleAllContext}>
            <ItemsLeftContext.Provider value={itemsLeft}>
              <HasTasksContext.Provider value={hasTasks}>
                {children}
              </HasTasksContext.Provider>
            </ItemsLeftContext.Provider>
          </ToggleAllContext.Provider>
        </FilterContext.Provider>
      </UpdateTasksContext.Provider>
    </TasksContext.Provider>
  )
};

export default TasksProvider;

export const useTasks = () => {
  const context = useContext(TasksContext);
  if(context === null) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context
}
export const useUpdateTasks = () => {
  const context = useContext(UpdateTasksContext);
  if(context === null) {
    throw new Error('useUpdateTasks must be used within a TasksProvider');
  }
  return context
}
export const useFilter = () => {
  const context = useContext(FilterContext);
  if(context === null) {
    throw new Error('useFilter must be used within a TasksProvider');
  }
  return context
}
export const useToggleAll = () => {
  const context = useContext(ToggleAllContext);
  if(context === null) {
    throw new Error('useToggleAll must be used within a TasksProvider');
  }
  return context
}
export const useItemsLeft = () => {
  const context = useContext(ItemsLeftContext);
  if(context === null) {
    throw new Error('ItemsLeftContext must be used within a TasksProvider');
  }
  return context
}
export const useHasTasks = () => {
  const context = useContext(HasTasksContext);
  if(context === null) {
    throw new Error('HasTasksContext must be used within a TasksProvider');
  }
  return context
}

