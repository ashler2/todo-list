import React from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks/index";
export const Tasks = () => {
  const { tasks } = useTasks("1");
  let projectName = "";

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__lists">
        {tasks.map(item => (
          <li key={`${item.id}`}>
            <Checkbox id={item.id} />
            <span>{item.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
