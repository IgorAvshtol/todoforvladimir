import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { actions, FilterKeys, TaskType } from '../../store/tasks-reducer';
import classes from './Task.module.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Button from '@material-ui/core/Button';
import { AppRootStateType } from '../../store/store';
import { TaskItem } from '../TaskItem/TaskItem';



type TaskFormType = {
    addTask: () => void;
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    error: string
}

export function Task(props: TaskFormType) {

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
        let newIsDoneValue = e.currentTarget.checked
        dispatch(actions.changeTaskStatusAC(id, newIsDoneValue))
    }

    const changeFilterHandler = (filter: FilterKeys) => {
        setFilter(filter)
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
            <div className={classes.inputBlock}>
                <TextField id="outlined-basic" label="Task" variant="outlined"
                           value={props.title}
                           onChange={props.onChangeHandler}
                           className={classes.input1}
                />
                <Button size="small" variant="outlined" className={classes.btnAdd} onClick={props.addTask}>+</Button>
                {props.error && <div className={classes.errorMessage}>{props.error}</div>}
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId={'droppable'}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div>
                                {
                                    FilterTasks(tasks).map((t, index) => {
                                            if (t.task) {
                                                return <TaskItem key={t.id}
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
                <Button onClick={() => changeFilterHandler(FilterKeys.All)}>All</Button>
                <Button onClick={() => changeFilterHandler(FilterKeys.Active)}>Active</Button>
                <Button onClick={() => changeFilterHandler(FilterKeys.Completed)}>Completed</Button>
            </div>
        </div>
    )
}




