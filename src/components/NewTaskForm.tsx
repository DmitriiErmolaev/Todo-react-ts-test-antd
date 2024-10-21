import { Form, Input } from 'antd';
import { useUpdateTasks } from '../Providers/TasksProvider';

interface INewTaskFormValues {
  newTask: string;
}

type HandleFormFinish = (values: INewTaskFormValues) => void;

const formStyles = {
  newTask: {
    item: {
      margin: 0
    },
    input: {
      border: 'none'
    }
  }
}

const NewTaskForm = () => {
  const [ form ] = Form.useForm();
  const { addNewTask } = useUpdateTasks()

  const handleFormFinish: HandleFormFinish = (values) => {
    if(!values.newTask) return;
    addNewTask(values.newTask)
    form.resetFields();
  }

  return (
    <Form
      form={form}
      onFinish={handleFormFinish}
      data-testid='my-form'
      preserve={false}
    >
      <Form.Item
        style={formStyles.newTask.item}
        name='newTask'
      >
        <Input size="large" style={formStyles.newTask.input} data-testid='my-input'/>
      </Form.Item>
    </Form>
  );
};

export default NewTaskForm;