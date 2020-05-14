import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import projects from "../files/projects";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/" style={{marginRight: 35}}>
          Portfolio
        </Link>
      

        <li class=" navbar-brand nav-item dropdown">
          <a
            className=" nav-link dropdown-toggle"
            href="javascript:;"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Projects
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {projects.data.map(project => (
              <Link
              className="dropdown-item"
                to={{
                  pathname: "/project",
                  state: { project: project.name }
                }}
                key={project.name}
              >
                {project.name}
              </Link>
            ))}
          </div>
        </li>

        <a className="navbar-brand" href="https://github.com/TsoomooGit" target="_blank" style={{marginRight: 35}}>
         Github
          </a>
      </nav>
    );
  }
}

export default Navbar;
