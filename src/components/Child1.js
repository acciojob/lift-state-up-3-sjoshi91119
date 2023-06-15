import React from "react";

function Child1(props) {
  return (
    <div
      style={{ backgroundColor: "#CE5F21", margin: "10px", padding: "10px" }}
    >
      <h2>Child Component 1</h2>
      <button
        onClick={() => {
          props.setSelectedOption("Option 1");
        }}
      >
        Option 1
      </button>
    </div>
  );
}

export default Child1;
