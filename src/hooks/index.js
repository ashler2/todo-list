import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";

export const useTasks = selectProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsub = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "fAw1gqnk6AyED8pzXy2j");
    // if project doesnt exist go get it
    unsub =
      selectProject && !collatedTasksExist(selectProject)
        ? (unsub = unsub.where("projectId", "==", selectProject))
        : selectProject === "Today"
        ? (unsub = unsub.where("data", "==", moment().format("DD/MM/YYYY")))
        : selectProject == "INBOX" || selectProject === 0
        ? (unsub = unsub.where("data", "==", ""))
        : unsub;

    unsub = unsub.onSnapshot(snap => {
      const newTask = snap.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));
      setTasks(selectProject === "NEXT_7")
        ? newTask.filter(
            task =>
              moment(task.date, "DD=MM-YYYY").diff(moment(), "days") <= 7 &&
              task.archived !== true
          )
        : newTask.filter(task => task.archived !== true);

      setArchivedTasks(newTask.filteR(task => task.archived !== false));
    });
    return () => unsub();
  }, [selectProject]);

  return { tasks, archivedTasks };
};
