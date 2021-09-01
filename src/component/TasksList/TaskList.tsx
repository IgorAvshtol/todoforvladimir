import React, { useState } from 'react';

import { FilterKeys, TaskType } from '../../store/tasks-reducer';
import { AddTask } from '../AddTask/AddTask';
import { ButtonFilter } from '../ButtonFilter/ButtonFilterTasks';
import { Task } from '../Task/Task';

import classes from './TaskList.module.css';


export function TaskList() {

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

  return (
      <div className={classes.main}>
        <AddTask/>
        <Task FilterTasks={FilterTasks}/>
        <div className={classes.allBtnStyle}>
          <ButtonFilter setFilter={setFilter} filterValue={FilterKeys.All}/>
          <ButtonFilter setFilter={setFilter} filterValue={FilterKeys.Active}/>
          <ButtonFilter setFilter={setFilter} filterValue={FilterKeys.Completed}/>
        </div>
      </div>
  )
}




