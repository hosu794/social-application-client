import React from "react";

import PropTypes from "prop-types";

function CastStoreButton({ id, castStore }) {
  return (
    <button onClick={castStore} className="button is-white">
      Like
    </button>
  );
}

CastStoreButton.propTypes = {
  storyActions: PropTypes.object,
  id: PropTypes.number,
};

export default CastStoreButton;
