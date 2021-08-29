import React, { ChangeEvent, useEffect, useState } from "react";
import { TaskType } from "../store/tasks-reducer";
import classes from "./Task.module.css";
import { useDrag } from "react-dnd";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import { Checkbox, IconButton, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

type TaskFormType = {
    onAllClickHandler: () => void;
    onActiveClickHandler: () => void;
    onCompletedClickHandler: () => void;
    FilterTasks: () => Array<TaskType>;
    addTask: () => void;
    deleteTask: (id: string) => void;
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeCheckboxHandler: (id: string, e: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    error: string
}


export function Task(props: TaskFormType) {

    const [{isDragging}, dragRef] = useDrag({
        type: "card",
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const onClickDeleteTask = (id: string) => {
        props.deleteTask(id)
    }

    const onClickChangeCheckboxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeCheckboxHandler(id, e)
    }

    const [characters, setCharacters] = useState<TaskType[]>(props.FilterTasks());

    useEffect(() => {
            setCharacters(props.FilterTasks())
        }, [props]
    )

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;
        const items = [...characters];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCharacters(items);
    }

    return (
        <div ref={dragRef} className={isDragging ? classes.mainForMovable : classes.main}>
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
                <Droppable droppableId={"droppable"}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <div>
                                {
                                    characters.map((t, index) => {
                                            if (t.task) {
                                                return <div key={t.id} className={classes.taskStyle}>
                                                    <Draggable key={t.id} draggableId={t.id} index={index}>
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <p>{t.task}
                                                                    <Checkbox checked={t.isDone || false}
                                                                              onChange={(e) => onClickChangeCheckboxHandler(t.id, e)}
                                                                              name="checkedA"/>
                                                                    <IconButton onClick={() => onClickDeleteTask(t.id)}
                                                                                aria-label="delete"
                                                                                className={classes.margin}>
                                                                        <DeleteIcon/>
                                                                    </IconButton>
                                                                </p>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                </div>
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
                <Button onClick={props.onAllClickHandler}>All</Button>
                <Button onClick={props.onActiveClickHandler}>Active</Button>
                <Button onClick={props.onCompletedClickHandler}>Completed</Button>
            </div>
        </div>
    )
}

