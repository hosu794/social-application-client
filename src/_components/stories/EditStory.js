import React, { lazy, Suspense, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { storyActions } from "../../_actions";

import PropTypes from "prop-types";
import { IStory } from "../../_types";

const EditDashboard = lazy(() => import("./EditDashboard"));

function EditStory(props) {
  const dispatch = useDispatch();

  const currentStory = useSelector((state) => state.stories.currentStory);

  const isLoading = useSelector((state) => state.stories.loading);

  const getStoryById = async () => {
    dispatch(storyActions.getStoryById(props.match.params.id));
  };
  useEffect(() => {
    getStoryById();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!isLoading ? <EditDashboard story={currentStory} /> : null}
    </Suspense>
  );
}

EditStory.propTypes = {
  currentStory: PropTypes.objectOf(IStory),
  isLoading: PropTypes.bool.isRequired,
};

export default EditStory;
