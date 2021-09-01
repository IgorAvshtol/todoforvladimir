import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { actions, TaskType } from "../../store/tasks-reducer";
import { AppRootStateType } from "../../store/store";
import { TaskItem } from "../TaskItem/TaskItem";

type FilterOfTaskType = {
  FilterTasks: (tasks: TaskType[]) => TaskType[]
}

export function Task(props: FilterOfTaskType) {

  const dispatch = useDispatch();

  const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks.tasks);

  const onClickDeleteTask = (id: string) => {
    dispatch(actions.deleteTaskAC(id))
  };

  const onClickChangeCheckboxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newIsDoneValue = e.currentTarget.checked
    dispatch(actions.changeTaskStatusAC(id, newIsDoneValue))
  };

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const items = [...tasks];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(actions.updateStateAC(items))
  }

  return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={'droppable'}>
          {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {
                  props.FilterTasks(tasks).map(({id, isDone, task}, index) => (
                        <TaskItem
                            key={id}
                            id={id}
                            idx={index}
                            number={index}
                            isDone={isDone}
                            task={task}
                            onClickDeleteTask={() => onClickDeleteTask(id)}
                            onClickChangeCheckbox={onClickChangeCheckboxHandler}
                        />
                      )
                  )
                }
                {provided.placeholder}
              </div>
          )}
        </Droppable>
      </DragDropContext>
  )
}