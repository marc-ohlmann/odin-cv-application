import React from "react";
import CvContact from "./components/CvContact";

export default class App extends React.Component {
  constructor()
  {
    super();
  }

  render(){
    return (
        <div>
            <CvContact/>
        </div>
    );
  }
}