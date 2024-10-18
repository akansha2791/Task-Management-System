import React, { useState } from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Column = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 30%;
  padding: 10px;
  background-color: #f9f9f9;
`;

const Task = styled.div`
  background-color: #e3f2fd;
  margin: 5px 0;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  const [columns, setColumns] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(0);

  const addColumn = () => {
    const columnName = prompt("Enter column name:");
    if (columnName) {
      setColumns([...columns, { name: columnName, tasks: [] }]);
    }
  };

  const addTask = () => {
    if (!taskInput) return;
    const updatedColumns = [...columns];
    updatedColumns[selectedColumn].tasks.push({ name: taskInput, status: 'To Do' });
    setColumns(updatedColumns);
    setTaskInput('');
  };

  const removeTask = (columnIndex, taskIndex) => {
    const updatedColumns = [...columns];
    updatedColumns[columnIndex].tasks.splice(taskIndex, 1);
    setColumns(updatedColumns);
  };

  const changeTaskStatus = (columnIndex, taskIndex) => {
    const updatedColumns = [...columns];
    const currentTask = updatedColumns[columnIndex].tasks[taskIndex];

    if (currentTask.status === 'To Do') {
      currentTask.status = 'In Progress';
    } else if (currentTask.status === 'In Progress') {
      currentTask.status = 'Done';
    } else {
      currentTask.status = 'To Do';
    }
    
    setColumns(updatedColumns);
  };

  return (
    <div>
      <h1>Task Management Board</h1>
      <BoardContainer>
        {columns.map((column, index) => (
          <Column key={index}>
            <h3>{column.name}</h3>
            <input 
              type="text" 
              value={selectedColumn === index ? taskInput : ''} 
              onChange={(e) => {
                setTaskInput(e.target.value);
                setSelectedColumn(index);
              }} 
              placeholder="Add a new task" 
            />
            <button onClick={addTask}>Add Task</button>
           
            {column.tasks.map((task, taskIndex) => (
              <Task key={taskIndex}>
                {task.name} - {task.status}
                <div>
                  <button onClick={() => changeTaskStatus(index, taskIndex)}>Change Status</button>
                  <button onClick={() => removeTask(index, taskIndex)}>Remove</button>
                </div>
              </Task>
            ))}
          </Column>
        ))}
      </BoardContainer>
      <button onClick={addColumn}>Add Column</button>
    </div>
  );
};

export default App;

