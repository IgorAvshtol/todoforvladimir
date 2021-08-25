import { useState } from "react";
import { Box } from "./Box";
import classes from "./Box.module.css"

export function TaskFormContainer() {
    const [index, setIndex] = useState(3);

    function moveCard(i: number) {
        setIndex(i)
    }

    return (
        <div className={classes.allStyle} >
            <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
            <Box card={index === 2} moveCard={moveCard.bind(null, 2)}></Box>
            <Box card={index === 3} moveCard={moveCard.bind(null, 3)}></Box>
            <Box card={index === 4} moveCard={moveCard.bind(null, 4)}></Box>
            <Box card={index === 5} moveCard={moveCard.bind(null, 5)}></Box>
            <Box card={index === 6} moveCard={moveCard.bind(null, 6)}></Box>
            <Box card={index === 7} moveCard={moveCard.bind(null, 7)}></Box>
            <Box card={index === 8} moveCard={moveCard.bind(null, 8)}></Box>
            <Box card={index === 9} moveCard={moveCard.bind(null, 9)}></Box>
            <Box card={index === 10} moveCard={moveCard.bind(null, 10)}></Box>
            <Box card={index === 11} moveCard={moveCard.bind(null, 11)}></Box>
            <Box card={index === 12} moveCard={moveCard.bind(null, 12)}></Box>
            <Box card={index === 13} moveCard={moveCard.bind(null, 13)}></Box>
            <Box card={index === 14} moveCard={moveCard.bind(null, 14)}></Box>
            <Box card={index === 15} moveCard={moveCard.bind(null, 15)}></Box>
            <Box card={index === 16} moveCard={moveCard.bind(null, 16)}></Box>
            <Box card={index === 17} moveCard={moveCard.bind(null, 17)}></Box>
            <Box card={index === 18} moveCard={moveCard.bind(null, 18)}></Box>
            <Box card={index === 19} moveCard={moveCard.bind(null, 19)}></Box>
            <Box card={index === 20} moveCard={moveCard.bind(null, 20)}></Box>
        </div>
    );
}