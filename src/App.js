import './App.css';
import buttonpng from "./button1.png"
import checkpng from "./check2.png"
import backarrow from "./Arrow1.png"
import cancelpng from "./cancel-button.png"
import addTaskpng from "./addTask.png"
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
//import React from 'react';

function App() {

  const [titleText, setTitleText] = useState("")
  const [descriptionText, setDescriptionText] = useState("")
  const [assigneeText, setAssigneeText] = useState("")
  const [dueDateText, setDueDateText] = useState("")
  const [tasks, setTasks] = useState([])
  const handleChange = event => {
    setTitleText(event.value);
    setDescriptionText(event.value);
    setAssigneeText(event.value);
    setDueDateText(event.value);
  };

  function handleTaskAdded()
  {
      setTasks([...tasks, {titleText, descriptionText, assigneeText, dueDateText}]) // tasks is the current state and then you are updating with titleText
    alert("Task added: " + titleText + ", Description: " + descriptionText + ", Assignee: " + assigneeText + ", Due Date: " + dueDateText);
  }
  console.log(tasks) // testing component added to check if the tasks are being rendered properly

  return (
    <React.Fragment>
      <div className="App">
        <div className="tasks-container" >
          <div className="tasks-title" > Chores4Us </div>
          <img className="add-task-button" src={buttonpng} />
          <img className="add-check-button" src={checkpng} />
        </div>

        <div className="add-task-container" >
          <div className="add-task-title" > Add Task</div>
          <div className="title" > Title: </div>
          <div className="title-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="title-box-form" value={titleText} onChange={( e ) => setTitleText(e.target.value)} required />
                <label for="form-name"></label>
              </div>
            </form>
          </div>
          <div className="description"> Description:</div>
          <div className="description-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="description-box-form" value={descriptionText} onChange={( e ) => setDescriptionText(e.target.value)} required />
                <label for="form-name"></label>
              </div>
            </form>
          </div>
          <div className="assignee">Assignee:</div>
          <div className="assignee-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="assignee-box-form" value={assigneeText} onChange={( e ) => setAssigneeText(e.target.value)} required />
                <label for="form-name"></label>
              </div>
            </form>
          </div>
          <div className="due-date">Due Date:</div>
          <div className="due-date-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="due-date-box-form" value={dueDateText} onChange={( e ) => setDueDateText(e.target.value)} required />
                <label for="form-name"></label>
              </div>
            </form>
          </div>
          <div className="frequency">Frequency:</div>
          <div className="daily-button"></div>
          <div className="daily">Daily</div>
          <div className="weekly-button"></div>
          <div className="weekly">Weekly</div>
          <div className="bi-weekly-button"></div>
          <div className="bi-weekly">Bi-Weekly</div>
        </div>

        <div className="completed-container" >
          <div className="completed-tasks-title" > Completed Tasks </div>
          <img className="add-back-arrow-button" src={backarrow} />

        </div>

        <div className="add-task-container">
          <img className="cancel-button" src={cancelpng} />
          <img className="mark-completed-task-button" src={addTaskpng} onClick={handleTaskAdded} />
        </div>

      </div>
    </React.Fragment>

  );
}

export default App;