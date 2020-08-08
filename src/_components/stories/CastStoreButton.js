import React from "react";

import PropTypes from "prop-types";

function CastStoreButton({ castStore }) {
  return (
    <button onClick={castStore} className="button is-white">
      Like
    </button>
  );
}

CastStoreButton.propTypes = {
  castStore: PropTypes.func.isRequired,
};

export default CastStoreButton;
