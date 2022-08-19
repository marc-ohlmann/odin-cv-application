import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import CvEditableInput from "./CvEditableInput"

const jobTask = (description) => {
  return {description}
};


export default class CvJobTask extends CvEditableInput {
    constructor(props)
    {
      super(props);

      this.state = {
        ...this.state,
      }
      
      this.handleInputChanged = this.handleInputChanged.bind(this);
      this.handleDeleteBtnClicked = this.handleDeleteBtnClicked.bind(this);
    }

    handleInputChanged()
    {
      let inputDescription = document.querySelector("#input-description" + this.props.listId).value;


      this.props.onChange(this.props.listId, inputDescription);
    }

    handleDeleteBtnClicked()
    {
      this.props.onDelete(this.props.listId);
    }
  
    render(){
      return this.props.bCanEdit ? (
        <div>
          <input type="text" id={"input-description" + this.props.listId} value={this.props.description} name={this.props.listId} onChange={this.handleInputChanged}/>
          <button onClick={this.handleDeleteBtnClicked}>Delete</button>
        </div>
      ) : (
        <div>
          {this.props.description}
        </div>
      );
    }
  }
  
  export {CvJobTask, jobTask};