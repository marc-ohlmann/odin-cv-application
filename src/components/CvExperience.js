import React from "react";
import {CvEditableInput} from "./CvEditableInput"
import {CvJobTaskList} from "./CvJobTaskList"


const experienceInfo = (companyName, positionTitle, startDate, endDate, tasks) => {
  return {companyName, positionTitle, startDate, endDate, tasks}
};


class CvExperience extends CvEditableInput {
  constructor()
  {
    super();

    this.state = {
      ...this.state,
      experience: experienceInfo("", "", "", "", [])
    };

    this.handleInputChanged = this.handleInputChanged.bind(this);
  };
  
  
  handleInputChanged()
  {
    let inputCompanyName = document.querySelector("#input-companyName").value;
    let inputPositionTitle = document.querySelector("#input-positionTitle").value;
    let inputStartDate = document.querySelector("#input-startDate").value;
    let inputEndDate = document.querySelector("#input-endDate").value;
    
    // todo - tasks
    let inputTasks = [];

    this.setState({
      experience: experienceInfo(inputCompanyName, inputPositionTitle, inputStartDate, inputEndDate, inputTasks)
    });
  };

  render(){
    return this.state.bEditMode ? (
      <div>
        {super.render()}
        <div>Company: <input type="text" id="input-companyName" name="companyName" value={this.state.experience.companyName} onChange={this.handleInputChanged}/></div>
        <div>Position Title: <input type="text" id="input-positionTitle" name="positionTitle" value={this.state.experience.positionTitle} onChange={this.handleInputChanged}/></div>
        <div>Start Date: <input type="date" id="input-startDate" name="startDate" value={this.state.experience.startDate} onChange={this.handleInputChanged}/></div>
        <div>End Date: <input type="date" id="input-endDate" name="endDate" value={this.state.experience.endDate} onChange={this.handleInputChanged}/></div>
        <CvJobTaskList title="Tasks" bCanEdit={this.state.bEditMode}/>
      </div>
    ) : (
      <div>
        {super.render()}
        <div>Company: {this.state.experience.companyName}</div>
        <div>Position Title: {this.state.experience.positionTitle}</div>
        <div>Start Date: {this.state.experience.startDate}</div>
        <div>End Date: {this.state.experience.endDate}</div>
        <CvJobTaskList title="Tasks" bCanEdit={this.state.bEditMode}/>
      </div>
    );
  };

}

export {CvExperience, experienceInfo}