import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { actions, FilterKeys, TaskType } from '../../store/tasks-reducer';
import classes from './Task.module.css';
import { AppRootStateType } from '../../store/store';
import { TaskItem } from '../TaskItem/TaskItem';
import { AddTask } from '../AddTask/AddTask';
import { ButtonFilter } from '../ButtonFilter/ButtonFilterTasks';


export function Task() {

  const dispatch = useDispatch();

  const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks.tasks);

  const onClickDeleteTask = (id: string) => {
    dispatch(actions.deleteTaskAC(id))
  }

  const [filter, setFilter] = useState<FilterKeys>(FilterKeys.All);

  const FilterTasks = (tasks: TaskType[]): TaskType[] => {

    if (filter === FilterKeys.Active) {
      return tasks.filter(t => !t.isDone);
    }
    if (filter === FilterKeys.Completed) {
      return tasks.filter(t => t.isDone);
    }
    return tasks
  }

  const onClickChangeCheckboxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newIsDoneValue = e.currentTarget.checked
    dispatch(actions.changeTaskStatusAC(id, newIsDoneValue))
  }

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const items = [...tasks];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(actions.updateStateAC(items))
  }

  return (
      <div className={classes.main}>
        <AddTask/>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={'droppable'}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <div>
                    {
                      FilterTasks(tasks).map((t, index) => {
                            if (t.task) {
                              return <TaskItem
                                  key={t.id}
                                  id={t.id}
                                  idx={index}
                                  number={index}
                                  isDone={t.isDone}
                                  task={t.task}
                                  onClickDeleteTask={() => onClickDeleteTask(t.id)}
                                  onClickChangeCheckbox={onClickChangeCheckboxHandler}
                              />
                            }
                          }
                      )
                    }
                    {provided.placeholder}
                  </div>
                </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className={classes.allBtnStyle}>
        <ButtonFilter setFilter={setFilter} filterValue={FilterKeys.All}/>
        <ButtonFilter setFilter={setFilter} filterValue={FilterKeys.Active}/>
        <ButtonFilter setFilter={setFilter} filterValue={FilterKeys.Completed}/>
        </div>
      </div>
  )
}



