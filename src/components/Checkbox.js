import React from "react";
import { firebase } from "../firebase";
export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection("task")
      .doc(id)
      .update({ archived: true });
  };
  return (
    <div
      className="checbox-holder"
      data-testid="checbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};
