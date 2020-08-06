import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { storyActions } from "../../_actions";

function EditStory(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storyActions.getStoryById(props.params.match.id));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default EditStory;
