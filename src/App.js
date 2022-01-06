import './App.css';
import buttonpng from "./button1.png"
import checkpng from "./check2.png"
import backarrow from "./Arrow1.png"
import cancelpng from "./cancel-button.png"
import addTaskpng from "./addTask.png"
import React, { useState } from 'react';

function App() {

  const [titleText, setTitleText] = useState("")
  const [descriptionText, setDescriptionText] = useState("")
  const [assigneeText, setAssigneeText] = useState("")
  const [dueDateText, setDueDateText] = useState("")
  const [tasks, setTasks] = useState([])
  const [renderAdd, setRenderAdd] = useState(true)
  // make a new const for a setSelectedTask useState
  // when the checkmark is clicked then map through the list of tasks and the set the completed component of the task to true
  const [selectedTask, setSelectedTask] = useState([])
  // another section to tasks.map for the completed tasks
  //  const [task, setCancel] = useState([])
  const handleChange = event => {
    setTitleText(event.value);
    setDescriptionText(event.value);
    setAssigneeText(event.value);
    setDueDateText(event.value);
  };

  function handleTaskAdded() {
    setTasks([...tasks, { titleText, descriptionText, assigneeText, dueDateText, completed: false }]); // tasks is the current state and then you are updating with titleText
    alert("Task added: " + titleText + ", Description: " + descriptionText + ", Assignee: " + assigneeText + ", Due Date: " + dueDateText);
  }
  // console.log(tasks) // testing component added to check if the tasks are being rendered properly

  function handleTaskCompleted() {
    setSelectedTask([...selectedTask, { titleText, descriptionText, assigneeText, dueDateText, completed: true }]);
    alert("Task marked complete: " + titleText + ", Description: " + descriptionText + ", Assignee: " + assigneeText + ", Due Date: " + dueDateText);
  }
  /* function handleTaskCancelled()
  {
    setCancel([...task, { " ", " ", " ", " " }]);
    alert("Task cancelled: " + titleText + ", Description: " + descriptionText + ", Assignee: " + assigneeText + ", Due Date: " + dueDateText);
  } */

  return (
    <React.Fragment>
      <div className="App">
        <div className="tasks-container">
          <div className="tasks-title" > Chores4Us </div>
          {
            // filter out all of the things which are not completed and then render them in the home page
            // need another function that wll do the opposite for the completed tasks page
            //tasks.filter.map (item ...)
            tasks.map(item => {
              return <li> <button> {item.titleText} </button> </li>
            })
          }

          <img className="add-task-button" src={buttonpng} />
          <img className="add-check-button" src={checkpng} />
        </div>

        {renderAdd && <div> <div className="add-task-container" >
          <div className="add-task-title" > Add Task</div>
          <div className="title" > Title: </div>
          <div className="title-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="title-box-form" value={titleText} onChange={(e) => setTitleText(e.target.value)} required />
                <label for="form-name"></label>
              </div>
            </form>
          </div>
          <div className="description"> Description:</div>
          <div className="description-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="description-box-form" value={descriptionText} onChange={(e) => setDescriptionText(e.target.value)} required />
                <label for="form-name"></label>
              </div>
            </form>
          </div>
          <div className="assignee">Assignee:</div>
          <div className="assignee-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="assignee-box-form" value={assigneeText} onChange={(e) => setAssigneeText(e.target.value)} required />
                <label for="form-name"></label>
              </div>
            </form>
          </div>
          <div className="due-date">Due Date:</div>
          <div className="due-date-box">
            <form method="post" action-xhr="/submit-form" target="_top" class="main-form">
              <div class="input">
                <input type="text" name="name" id="due-date-box-form" value={dueDateText} onChange={(e) => setDueDateText(e.target.value)} required />
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

          <div className="add-task-container">
            <img className="cancel-button" src={cancelpng} /* onClick={handleTaskCancelled} */ />
            <img className="mark-completed-task-button" src={addTaskpng} onClick={handleTaskAdded} />
          </div> </div>}

        <div className="completed-container" >
          <div className="completed-tasks-title" > Completed Tasks </div>
          <img className="add-back-arrow-button" src={backarrow} />

        </div>



      </div>
    </React.Fragment>

  );
}

export default App;