import { Button, Space } from 'antd';
import { useFilter, useUpdateTasks } from '../Providers/TasksProvider';
import { TaskFilters } from '../types/types';

interface IFilterButton {
  id: TaskFilters,
  label: string,
}

const filterButtons: IFilterButton[] = [
  {
    id:'all',
    label: 'All',
  },
  {
    id:'uncompleted',
    label: 'Active',
  },
  {
    id:'completed',
    label: 'Completed',
  },
]

const TasksFilter = () => {
  const { applyFilter } = useUpdateTasks();
  const filter = useFilter()
  const handleFilterButtonClick: (filter: TaskFilters) => void = (buttonId) => {
    applyFilter(buttonId)
  }

  return (
    <Space>
      {filterButtons.map(button => (
        <Button
          key={button.id}
          size='small'
          type={filter === button.id ? 'primary' : 'text'}
          onClick={() => handleFilterButtonClick(button.id)}
        >
          {button.label}
        </Button>
      ))}
    </Space>
  );
};

export default TasksFilter;