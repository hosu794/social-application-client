import React from "react";

import { storyActions } from "../../_actions";

import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

function CastStoreButton({ id }) {
  const dispatch = useDispatch();

  const unCastStore = async () => {
    await dispatch(storyActions.unCastLove({ storyId: id }));
  };

  return (
    <button onClick={unCastStore} className="button is-white">
      Unlike
    </button>
  );
}

CastStoreButton.propTypes = {
  storyActions: PropTypes.object,
  id: PropTypes.number.isRequired,
};

export default CastStoreButton;
