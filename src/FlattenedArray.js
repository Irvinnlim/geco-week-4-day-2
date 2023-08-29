import _ from "lodash";
import React from "react";

const FlattenedArray = () => {
  const a = [["E"], ["F"]];

  const result = _.flattenDeep(a);

  return (
    <div>
      <h2>Flattened Array</h2>
      <p>Output: {JSON.stringify(result)}</p>
    </div>
  );
};

export default FlattenedArray;
