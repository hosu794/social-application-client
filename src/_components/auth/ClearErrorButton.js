import React from "react";

import PropTypes from "prop-types";

function ClearErrorButton({ children }) {
  return (
    <div className="notification is-danger">
      <button className="button-clear"></button>
      {children}
    </div>
  );
}

ClearErrorButton.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ClearErrorButton;
