import React from "react";
function Project() {
  return (
    <div class="container work">
      <div class="container leftHead">
        <h1 id="work">Work</h1>
      </div>
      <div class="workPictures">
        <div id="foodTruck">
          <a
            href="https://github.com/rgeisreiter/FoodTruckLocator"
            target="_blank"
          >
            <img
              id="foodTruckSS"
              src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              alt="Food Truck Locator Project"
            />
          </a>
          <p class="caption">Food Truck Locator</p>
        </div>
        <div id="projectTwo">
          <a
            href="https://tbsmith0205.github.io/TBS_PasswordGenerator/"
            target="_blank"
          >
            <img
              id="projectSmall"
              src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Password Generator"
            />
          </a>
          <p id="caption">Password Generator</p>
        </div>
        <div id="projectTwo">
          <a
            href="https://tbsmith0205.github.io/TBS-Code-Refactor/"
            target="_blank"
          >
            <img
              id="projectSmall"
              src="https://images.unsplash.com/photo-1598620617137-2ab990aadd37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Code Refactor Project"
            />
          </a>
          <p id="caption">Code Refactor</p>
          <div id="projectTwo">
            <a
              href="https://tbsmith0205.github.io/Day_Planner_TBS/"
              target="_blank"
            >
              <img
                id="projectSmall"
                src="https://images.unsplash.com/photo-1532630571098-79a3d222b00d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2038&q=80"
                alt="Day Planner Project"
              />
            </a>
            <p id="caption">Day Planner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
