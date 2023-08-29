import _ from "lodash";
import React from "react";

const MergedArray = () => {
  const t = ["E", "F"];
  const nestedArray = [["F"], ["G"]];

  const result = _.union(t, nestedArray);

  return (
    <div>
      <h2>Merged Array</h2>
      <p>Output: {JSON.stringify(result)}</p>
    </div>
  );
};

export default MergedArray;
