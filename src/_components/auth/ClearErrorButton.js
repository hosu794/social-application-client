import React from "react";

function ClearErrorButton({ children }) {
  return (
    <div className="notification is-danger">
      <button className="button-clear"></button>
      {children}
    </div>
  );
}

export default ClearErrorButton;
