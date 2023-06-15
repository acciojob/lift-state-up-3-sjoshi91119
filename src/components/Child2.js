import React from "react";

function Child2(props) {
  return (
    <div
      style={{ backgroundColor: "#FFCE00", margin: "10px", padding: "10px" }}
    >
      <h2>Child Component 2</h2>
      <button
        onClick={() => {
          props.setSelectedOption("Option 2");
        }}
      >
        Option 2
      </button>
    </div>
  );
}

export default Child2;
