import { ConfigProvider, Typography } from 'antd';
import '../assets/TodoAppTitle.css';
const { Title } = Typography;

const TodoAppTitle = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 28,
        },
      }}
    >
      <Title className='TodoApp__title'>todos</Title>

    </ConfigProvider>
  );
};

export default TodoAppTitle;