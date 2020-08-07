import React, { lazy, Suspense, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { storyActions } from "../../_actions";

const EditDashboard = lazy(() => import("./EditDashboard"));

function EditStore(props) {
  const dispatch = useDispatch();

  const currentStory = useSelector((state) => state.stories.currentStory);

  const isLoading = useSelector((state) => state.stories.loading);

  useEffect(() => {
    dispatch(storyActions.getStoryById(props.match.params.id));
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!isLoading ? <EditDashboard story={currentStory} /> : null}
    </Suspense>
  );
}

export default EditStore;
