import React from "react";

// name
// phone
// email
// address

export default class CvContact extends React.Component {
  constructor()
  {
    super();

    this.state = {
      bEditMode: true,
      name: "",
      phone: "",
      email: "",
      address: "",
    };

    this.handleEditBtnClicked = this.handleEditBtnClicked.bind(this);
    this.handleApplyBtnClicked = this.handleApplyBtnClicked.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
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

  handleInputChanged()
  {
    let inputName = document.querySelector("#input-name").value;
    let inputPhone = document.querySelector("#input-phone").value;
    let inputEmail = document.querySelector("#input-email").value;
    let inputAddress = document.querySelector("#input-address").value;

    this.setState({
      name: inputName,
      phone: inputPhone,
      email: inputEmail,
      address: inputAddress
    });
  }

  render(){
    return this.state.bEditMode ? (
      <div>
        <button id="applyBtn" onClick={this.handleApplyBtnClicked}>Apply</button>
        <div><input type="text" id="input-name" name="name" value={this.state.name} onChange={this.handleInputChanged}/></div>
        <div><input type="text" id="input-phone" name="phone" value={this.state.phone} onChange={this.handleInputChanged}/></div>
        <div><input type="text" id="input-email" name="email" value={this.state.email} onChange={this.handleInputChanged}/></div>
        <div><input type="text" id="input-address" name="address" value={this.state.address} onChange={this.handleInputChanged}/></div>
      </div>
    ) : (
      <div>
        <button id="editBtn" onClick={this.handleEditBtnClicked}>Edit</button>
        <div>{this.state.name}</div>
        <div>{this.state.phone}</div>
        <div>{this.state.email}</div>
        <div>{this.state.address}</div>
      </div>
    );
  }
}