import React, { useEffect } from "react";

function Story(props) {
  useEffect(() => {
    console.log(props.match.params.id);
  }, []);

  return (
    <React.Fragment>
      <h1>Story</h1>
    </React.Fragment>
  );
}

export default Story;
