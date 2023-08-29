import React from "react";
import _ from "lodash";

const SymmetricDifference = () => {
  const arrOne = [
    {
      id: 20,
      name: "alex",
    },
    {
      id: 30,
      name: "alina",
    },
  ];

  const arrTwo = [
    {
      id: 40,
      name: "hello",
    },
    {
      id: 30,
      name: "world",
    },
  ];

  const compare = (obj1, obj2) => obj1.id === obj2.id;

  const result = _.xorWith(arrOne, arrTwo, compare);
  const res = _.differenceWith([...arrOne, ...arrTwo], result, compare);

  return (
    <div>
      <h2>Symmetric Difference</h2>
      <div>
        <p>
          result = {JSON.stringify(result)} && res = {JSON.stringify(res)}
        </p>
      </div>
    </div>
  );
};

export default SymmetricDifference;
