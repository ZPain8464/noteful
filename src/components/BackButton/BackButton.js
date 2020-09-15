import React from "react";

export default function BackButton(props) {
  return (
    <>
      <button onClick={(e) => props.history.goBack()} className="BackButton">
        Back
      </button>
    </>
  );
}
