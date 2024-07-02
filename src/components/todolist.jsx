/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Todolist(props) {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(props.todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    props.setTodos(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {props.todos.map((value, index) => (
              <Draggable key={value.id} draggableId={value.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card
                      key={index}
                      todo={value}
                      deleteTodo={props.onDeleteTodo}
                      editable={props.onEditable}
                      setUpdateContent={props.setUpdateContent}
                      setUpdateId={props.setUpdateId}
                      inputRef={props.inputRef}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Todolist;
