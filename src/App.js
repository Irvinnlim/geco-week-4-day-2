import React, { useState } from "react";
import _ from "lodash";
import SymmetricDifference from "./SymmetricDifference";
import Tables from "./Tables";
import FlattenedArray from "./FlattenedArray";
import MergedArray from "./MergedArray";

const App = () => {
  const [arrayOfObjects, setArrayOfObjects] = useState([
    { id: 1, name: "Object 1" },
    { id: 2, name: "Object 2" },
    { id: 3, name: "Object 3" },
  ]);

  const [object, setObject] = useState({
    property1: "value 1",
    property2: "value 2",
    property3: "value 3",
  });

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Practice all datatypes");
  const [isActive, setIsActive] = useState(true);

  const updateSecondObject = () => {
    let updatedArr = [...arrayOfObjects];
    updatedArr[1] = { ...updatedArr[1], name: "Updated Object 2" };
    setArrayOfObjects(updatedArr);

    //lodash
    console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
  };

  const updateObjectProperties = () => {
    setObject({ ...object, property1: "a", property2: "b" });
  };

  return (
    <div>
      <div>
        <h2>Create an array of object and update its second index</h2>
        <ul>
          {arrayOfObjects.map((object) => (
            <li key={object.id}>{object.name}</li>
          ))}
        </ul>
        <button onClick={updateSecondObject}>Update</button>
      </div>

      <div>
        <h2>Create an object, update it's 2 property values</h2>
        <p>Property 1: {object.property1}</p>
        <p>Property 2: {object.property2}</p>
        <p>Property 3: {object.property3}</p>
        <button onClick={updateObjectProperties}>Update</button>
      </div>
      <SymmetricDifference />
      <Tables />
      <FlattenedArray />
      <MergedArray />
    </div>
  );
};

export default App;
