import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          value={input}
          type="text"
          placeholder="Search here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
