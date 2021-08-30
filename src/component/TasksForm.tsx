import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/tasks-reducer';
import { Task } from './Task/Task';


export function TasksForm() {

    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>('');

    const [error, setError] = useState<string>('');

    const addTask = () => {
        if (title.trim() !== '') {
            dispatch(actions.addTaskAC(title.trim()))
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
    }

    return (
        <Task
            addTask={addTask}
            onChangeHandler={onChangeHandler}
            title={title}
            error={error}
        />
    )
}