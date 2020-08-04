import React from "react";

import PropTypes from "prop-types";

function CastStoreButton({ id, unCastStore }) {
  return (
    <button onClick={unCastStore} className="button is-white">
      Unlike
    </button>
  );
}

CastStoreButton.propTypes = {
  storyActions: PropTypes.object,
  id: PropTypes.number,
};

export default CastStoreButton;
