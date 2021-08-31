import React, { ChangeEvent } from 'react';

import classes from '../Task/Task.module.css';
import { Draggable } from 'react-beautiful-dnd';
import { Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

type TaskItemPropsType = {
  id: string
  task: string
  isDone: boolean
  idx: number
  number: number
  onClickChangeCheckbox: (id: string, e: ChangeEvent<HTMLInputElement>) => void
  onClickDeleteTask: () => void
}

export const TaskItem = ({id, task, idx, isDone, onClickChangeCheckbox, onClickDeleteTask, number}: TaskItemPropsType) => {
  return (
      <div key={id} className={classes.taskStyle}>
        <Draggable key={id} draggableId={id} index={idx}>
          {(provided) => (
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                   className={classes.itemStyle}>
                <p>{number + 1}</p>
                <p>{task}</p>
                <div className={classes.checkAndDelete}>
                  <Checkbox
                      checked={isDone || false}
                      onChange={(e) => onClickChangeCheckbox(id, e)}
                      name="checkedA"
                  />
                  <IconButton onClick={onClickDeleteTask} aria-label="delete" className={classes.margin}>
                    <DeleteIcon/>
                  </IconButton>
                </div>
              </div>
          )}
        </Draggable>
      </div>
  );
};
