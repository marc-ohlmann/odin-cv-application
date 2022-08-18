import React from "react";
import CvEditableInput from "./CvEditableInput"


const contactInfo = (name, phone, email, address) => {
  return {name, phone, email, address}
};


class CvContact extends CvEditableInput {
  constructor()
  {
    super();

    this.state = {
      ...this.state,
      contact: contactInfo("", "", "", ""),
    };

    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  handleInputChanged()
  {
    let inputName = document.querySelector("#input-name").value;
    let inputPhone = document.querySelector("#input-phone").value;
    let inputEmail = document.querySelector("#input-email").value;
    let inputAddress = document.querySelector("#input-address").value;

    this.setState({
      contact: contactInfo(inputName, inputPhone, inputEmail, inputAddress)
    });
  }

  render(){
    return this.state.bEditMode ? (
      <div>
        {super.render()}
        <div>Name: <input type="text" id="input-name" name="name" value={this.state.contact.name} onChange={this.handleInputChanged}/></div>
        <div>Phone: <input type="text" id="input-phone" name="phone" value={this.state.contact.phone} onChange={this.handleInputChanged}/></div>
        <div>Email: <input type="text" id="input-email" name="email" value={this.state.contact.email} onChange={this.handleInputChanged}/></div>
        <div>Address: <input type="text" id="input-address" name="address" value={this.state.contact.address} onChange={this.handleInputChanged}/></div>
      </div>
    ) : (
      <div>
        {super.render()}
        <div>Name: {this.state.contact.name}</div>
        <div>Phone: {this.state.contact.phone}</div>
        <div>Email: {this.state.contact.email}</div>
        <div>Address: {this.state.contact.address}</div>
      </div>
    );
  }
}

export {CvContact, contactInfo}