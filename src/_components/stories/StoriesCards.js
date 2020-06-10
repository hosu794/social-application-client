import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

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

export default StoriesCards;
