import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskFormContainer } from "./component/TaskFormContainer";


function App() {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <TaskFormContainer/>
            </DndProvider>
        </div>
    );
}

export default App;
