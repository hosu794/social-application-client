import React from "react";

import { storyActions } from "../../_actions";

import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

function CastStoreButton({ id }) {
  const dispatch = useDispatch();

  function castStore() {
    dispatch(storyActions.castLove({ storyId: id }));
  }

  return (
    <button onClick={castStore} className="button is-white">
      Like
    </button>
  );
}

CastStoreButton.propTypes = {
  storyActions: PropTypes.object,
  id: PropTypes.number.isRequired,
};

export default CastStoreButton;
