import { useDrop } from "react-dnd";
import { TasksForm } from "./TasksForm";
import classes from "./Box.module.css"

export function Box({card, moveCard}: any) {
    const [{isOver}, dropRef] = useDrop({
        accept: "card",
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        }),
    });

    return (
        <div
            className={classes.box}
            ref={dropRef}
            style={{
                backgroundColor: isOver ? "white" : "white"
            }}
        >
            {card ? <TasksForm/> : ""}
        </div>
    )
}