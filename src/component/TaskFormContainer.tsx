import { useState } from "react";
import { Box } from "./Box";
import classes from "./Box.module.css"


const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export function TaskFormContainer() {

    const [index, setIndex] = useState(value[2]);

    function moveCard(i: number) {
        setIndex(i)
    }


    return (
        <div className={classes.containerStyle}>
            {value.map(v => {
                return <Box card={index === v} moveCard={moveCard.bind(null, v)}/>
            })}
        </div>
    );
}