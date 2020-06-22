import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import { IStory } from "../../_types";
import PropTypes from "prop-types";
const StoryCard = lazy(() => import("./StoryCard"));

function StoriesCards() {
  const content = useSelector((state) => state.stories.content);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {content
        ? content.map((story) => {
            return (
              <StoryCard
                key={story.id}
                id={story.id}
                username={story.createdBy.username}
                title={story.title}
                userId={story.createdBy.id}
                description={story.description}
                body={story.body}
                data={story.creationDateTime}
              />
            );
          })
        : ""}
    </Suspense>
  );
}

StoriesCards.propTypes = {
  content: PropTypes.arrayOf(IStory),
};

export default StoriesCards;
