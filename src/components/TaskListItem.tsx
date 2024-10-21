import { Checkbox, Input, InputRef } from 'antd';
import { ChangeEventHandler, FC, memo, useEffect, useRef, useState } from 'react';
import { ITaskListItem } from '../types/types';
import { Typography } from 'antd';
import Sample from './Sample';
import '../assets/TaskListItem.css';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useUpdateTasks } from '../Providers/TasksProvider';
const { Text } = Typography;

const TaskListItem:FC<ITaskListItem>  = memo(({index, completed, text}) => {
  const [ isEdit, setIsEdit ] = useState(false);
  const [ newText, setNewText ] = useState(text);
  const inputRef = useRef<InputRef>(null);
  const { toggleTask, editTask } = useUpdateTasks();

  useEffect(() => {
    if(isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit])

  const handleCheckboxClick = (e:CheckboxChangeEvent) => {
    toggleTask(index)
  }

  const handleDblClick = () => {
    setIsEdit(true);
  }
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewText(e.target.value)
  }
  const handleSaveNewValue =(e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>)=> {
    setIsEdit(false);
    editTask(e.currentTarget.value, index);
  }

  return (
    <li onDoubleClick={handleDblClick}>
      <Sample
        addonBefore={<Checkbox className='TaskListItem__checkbox' onChange={handleCheckboxClick} checked={completed}/>}
        content={isEdit ? (
          <Input
            ref={inputRef}
            value={newText}
            size="large"
            style={{border: 'none'}}
            onPressEnter={handleSaveNewValue}
            onChange={handleChangeInput}
            onBlur={handleSaveNewValue}
          />
        ) : (
          <div >
            <Text className={`TaskListItem__content ${completed ? 'TaskListItem__content_completed' : ''}`}>
              {text}
            </Text>
          </div>
        )}
      />
    </li>
  );
});

export default TaskListItem;