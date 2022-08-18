import React from "react";
import {CvContact, contactInfo} from "./components/CvContact";
import {CvEducation, educationInfo} from "./components/CvEducation";
import {CvExperience, task, experienceInfo} from "./components/CvExperience";

export default class App extends React.Component {
  constructor()
  {
    super();
  }

  render(){
    return (
        <div>
            <CvContact/>
            <CvEducation/>
            <CvExperience/>
        </div>
    );
  }
}