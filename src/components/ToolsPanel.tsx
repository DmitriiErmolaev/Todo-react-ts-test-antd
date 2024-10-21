import { Button, Col, Row } from 'antd';
import TasksFilter from './TasksFilter';
import ItemsLeft from './ItemsLeft';
import { useHasTasks, useUpdateTasks } from '../Providers/TasksProvider';

const toolsPanelStyle = {
  panel: {
    padding: '.5rem'
  },
  itemsLeftArea: {
    width:'100%', height:"100%"
  }
}

const ToolsPanel = () => {
  const { clearCompleted } = useUpdateTasks();
  const hasTasks = useHasTasks();

  const handleClearCompleted = () => {
    clearCompleted();
  }

  return (
    hasTasks ? (
      <Row justify='space-between' style={toolsPanelStyle.panel}>
        <Col span={5}>
          <Row justify='center' align='middle' style={toolsPanelStyle.itemsLeftArea}>
            <ItemsLeft />
          </Row>
        </Col>
        <Col >
          <TasksFilter />
        </Col>
        <Col span={5}>
          <Button size='small' type="text" onClick={handleClearCompleted}>Clear completed</Button>
        </Col>
      </Row>
    ):null
  );
};

export default ToolsPanel;