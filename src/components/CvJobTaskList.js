import React from "react";
import {CvJobTask, jobTask} from "./CvJobTask";

export default class CvJobTaskList extends React.Component {
    constructor(props)
    {
      super(props);

      this.state = {
        tasks: []
      }
  
      this.handleAddBtnClicked = this.handleAddBtnClicked.bind(this);
      this.handleTaskChanged = this.handleTaskChanged.bind(this);
      this.handleTaskDeleted = this.handleTaskDeleted.bind(this);
    }
  
    handleAddBtnClicked()
    {
      this.setState({
        tasks: this.state.tasks.concat(jobTask(""))
      });
    }

    handleTaskChanged(listId, description)
    {
      let new_tasks = this.state.tasks;

      new_tasks[listId].description = description;

      this.setState({
        tasks: new_tasks
      });

      console.log(new_tasks);
    }

    handleTaskDeleted(listId)
    {
      this.setState({
        tasks: this.state.tasks.filter((_, i) => i !== listId)
      });
    }
  
    render(){
      var taskList = [];
  
      for(let i = 0; i < this.state.tasks.length; i++)
      {
        taskList.push(
          <CvJobTask description={this.state.tasks[i].description} listId={i} onDelete={this.handleTaskDeleted} onChange={this.handleTaskChanged} bCanEdit={this.props.bCanEdit}/>
        );
      }

      return this.props.bCanEdit ? (
        <div>
          {taskList}
          <button id="addBtn" onClick={this.handleAddBtnClicked}>Add</button>
        </div>
      ) : (
        <div>
          {taskList}
        </div>
      );
    }
  }
  
  export {CvJobTaskList};