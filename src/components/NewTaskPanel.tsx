import { DownOutlined } from '@ant-design/icons';
import Sample from './Sample';
import NewTaskForm from './NewTaskForm';
import { useToggleAll } from '../Providers/TasksProvider';

const NewTaskPanel = () => {
  const { toggleAll } = useToggleAll()
  return (
    <div className='NewTaskPanel'>
      <Sample
        addonBefore={<DownOutlined className='ToggleAll__button' onClick={toggleAll} data-testid='toggle-all-button'/>}
        content={
          <NewTaskForm />
        }
      />
    </div>
  );
};

export default NewTaskPanel;