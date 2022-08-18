import React from "react";


export default class CvJobTaskList extends React.Component {
    constructor(props)
    {
      super(props);
  
      //this.handleAddBtnClicked = this.handleAddBtnClicked.bind(this);
    }
  
    /*handleAddBtnClicked()
    {
      this.setState({
        //
      });
    }*/
  
    render(){
      return this.props.bCanEdit ? (
        <div>
          {this.props.title}
          <button>Add Task</button>
        </div>
      ) : (
        <div>
          {this.props.title}
        </div>
      );
    }
  }
  
  export {CvJobTaskList};