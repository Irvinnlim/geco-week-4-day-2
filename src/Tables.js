import _ from "lodash";
import React from "react";

const Tables = () => {
  const str = ["u", "ec"];
  const arr = [
    {
      storageVal: "u",
      table: ["E", "F"],
    },
    {
      storageVal: "data",
      table: ["E", "F"],
    },
    {
      storageVal: "ec",
      table: ["E"],
    },
  ];

  const getTables = (data, searchValues) => {
    const filteredData = _.filter(data, (item) =>
      _.includes(searchValues, item.storageVal)
    );

    const tables = _.flatMap(filteredData, "table");

    return tables;
  };

  const result = getTables(arr, str);

  return (
    <div>
      <h2>Tables</h2>
      <ul>
        {result.map((table, index) => (
          <li key={index}>{table}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tables;
