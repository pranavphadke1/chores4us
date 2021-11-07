import './App.css';
import buttonpng from "./button1.png"
import checkpng from "./check2.png"
import backarrow from "./Arrow1.png"

function App() {
  return (
    <div className="App">
      <div className="tasks-container" >
        <div className="tasks-title" > Chores4Us </div>
        <img className="add-task-button" src={buttonpng} />
        <img className="add-check-button" src={checkpng} />
      </div>

      <div className="completed-container" >
        <div className="completed-tasks-title" > Completed Tasks </div>
        <img className="add-back-arrow-button" src={backarrow} />
        

      </div>


    </div>
  );
}

export default App;
