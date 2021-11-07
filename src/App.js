import './App.css';
import buttonpng from "./button1.png"
import checkpng from "./check2.png"
import cancelpng from "./cancel-button.png"

function App() {
  return (
    <div className="App">
      <div className="tasks-container" >
        <div className="tasks-title" > Chores4Us </div>
        <img className="add-task-button" src={buttonpng} />
        <img className="add-check-button" src={checkpng} />
      </div>

      <div className="add-task-container" >
        <div className="add-task-title" > Add Task</div>
        <div className="title" > Title: </div>
        <div className="title-box"></div>
        <div className="description"> Description:</div>
        <div className="description-box"></div>
        <div className="assignee">Assignee:</div>
        <div className="assignee-box"></div>
        <div className="due-date">Due Date:</div>
        <div className="due-date-box"></div>
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
      </div>

      <div className="add-task-container">
        <img className="cancel-button" src={cancelpng} />
      </div>



    </div>
  );
}

export default App;
