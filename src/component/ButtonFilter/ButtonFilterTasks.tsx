import { FilterKeys } from '../../store/tasks-reducer';
import Button from '@material-ui/core/Button';


type ButtonFilterType = {
  setFilter: (filter: FilterKeys) => void
  filterValue: FilterKeys
}

export function ButtonFilter(props: ButtonFilterType) {

  const changeFilterHandler = (filter: FilterKeys) => {
    props.setFilter(filter)
  }

  return <div>
    <Button onClick={() => changeFilterHandler(props.filterValue)}>{props.filterValue}</Button>
  </div>
}