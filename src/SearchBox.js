import React, { useState } from "react";
import _ from "lodash";

const data = [
  { id: 1, name: "Alina" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Adam" },
];

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredResults = _.filter(data, (item) =>
      _.includes(_.toLower(item.name), _.toLower(searchTerm))
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h2>Search Box</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{`${item.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
