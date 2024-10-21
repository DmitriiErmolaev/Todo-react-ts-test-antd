import { Typography } from 'antd';
import pluralize from '../utils/pluralize';
import { useItemsLeft } from '../Providers/TasksProvider';
const {Text} = Typography;

const ItemsLeft = () => {
  const itemsLeft  = useItemsLeft();

  return (
    <Text>
      {`${itemsLeft} ${pluralize(itemsLeft, 'item' , 'items')} left`}
    </Text>
  );
};

export default ItemsLeft;