import React, { Component } from "react";
import "../App.css";
import Navbar from "../components/navbar";
import projects from "../files/projects";

class Posts extends Component {
  state = {};

  render() {
    const projectName = this.props.location.state.project;
    const projectObj = projects.data.filter(
      each => each.name == projectName
    )[0];

    return (
      <React.Fragment>
        <Navbar />
        <div className="container project-page">
          <div className="row">
            <div className="col-md-3">Project Name:</div>
            <div className="col-md-7" id="project-name">{projectObj.name}</div>
          </div>

          <div className="row">
            <div className="col-md-3">Deployed Link:</div>
            <div className="col-md-7">
              {" "}
              <a href={projectObj.heroku} target="_blank">
                {projectObj.heroku}
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">Github Link</div>
            <div className="col-md-7">
              <a href={projectObj.github} target="_blank">
                {projectObj.github}
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">Technology:</div>
            <div className="col-md-7">{projectObj.technoloy}
            </div>
          </div>

          <div className="row desc">
            <div className="col-md-3">Description:</div>
            <div className="col-md-7">{projectObj.description}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">Screenshot:</div>
            <div className="col-md-7"><img src={projectObj.image}></img>
            </div>
          </div>

          
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
