import React from "react";


export default class CvEditableInput extends React.Component {
    constructor()
    {
      super();
  
      this.state = {
        bEditMode: true,
      };
  
      this.handleEditBtnClicked = this.handleEditBtnClicked.bind(this);
      this.handleApplyBtnClicked = this.handleApplyBtnClicked.bind(this);
    }
  
    handleEditBtnClicked()
    {
      this.setState({
        bEditMode: true
      });
    }
  
    handleApplyBtnClicked()
    {
      this.setState({
        bEditMode: false
      });
    }
  
    render(){
      return this.state.bEditMode ? (
        <div>
          <button id="applyBtn" onClick={this.handleApplyBtnClicked}>Apply</button>
        </div>
      ) : (
        <div>
          <button id="editBtn" onClick={this.handleEditBtnClicked}>Edit</button>
        </div>
      );
    }
  }
  
  export {CvEditableInput};