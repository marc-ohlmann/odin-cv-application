import React from "react";
import CvEditableInput from "./CvEditableInput"


const educationInfo = (schoolName, degreeType, major, graduationDate) => {
  return {schoolName, degreeType, major, graduationDate}
};


class CvEducation extends CvEditableInput {
  constructor()
  {
    super();

    this.state = {
      ...this.state,
      education: educationInfo("", "", "", ""),
    };

    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  handleInputChanged()
  {
    let inputSchoolName = document.querySelector("#input-schoolName").value;
    let inputDegreeType = document.querySelector("#input-degreeType").value;
    let inputMajor = document.querySelector("#input-major").value;
    let inputGraduationDate = document.querySelector("#input-graduationDate").value;

    this.setState({
      education: educationInfo(inputSchoolName, inputDegreeType, inputMajor, inputGraduationDate)
    });
  }

  render(){
    return this.state.bEditMode ? (
      <div>
        {super.render()}
        <div>School Name: <input type="text" id="input-schoolName" name="schoolName" value={this.state.education.schoolName} onChange={this.handleInputChanged}/></div>
        <div>Degree Type: <input type="text" id="input-degreeType" name="degreeType" value={this.state.education.degreeType} onChange={this.handleInputChanged}/></div>
        <div>Major: <input type="text" id="input-major" name="major" value={this.state.education.major} onChange={this.handleInputChanged}/></div>
        <div>Graduation Date: <input type="date" id="input-graduationDate" name="graduationDate" value={this.state.education.graduationDate} onChange={this.handleInputChanged}/></div>
      </div>
    ) : (
      <div>
        {super.render()}
        <div>School Name: {this.state.education.schoolName}</div>
        <div>Degree Type: {this.state.education.degreeType}</div>
        <div>Major: {this.state.education.major}</div>
        <div>Graduation Date: {this.state.education.graduationDate}</div>
      </div>
    );
  }
}


export {CvEducation, educationInfo}