import React from 'react';
import { useDispatch } from 'react-redux';

import classes from '../Task/Task.module.css';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { actions } from '../../store/tasks-reducer';
import { useInput } from '../UseInput/UseInput';


export function AddTask() {

  const dispatch = useDispatch();

  const {value, setValue, error, onChange, onBlur} = useInput()

  const addTask = () => {
    dispatch(actions.addTaskAC(value.trim()))
    setValue("")
  }

  return (
      <div className={classes.inputBlock}>
        <TextField
            id="outlined-basic" label="Task" variant="outlined"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={classes.input1}
        />
        <Button size="small" variant="outlined" className={classes.btnAdd} onClick={addTask}>+</Button>
        {error && <div className={classes.errorMessage}>{error}</div>}
      </div>
  )
}