import React, { memo } from "react";
import TagsWrapper from "../styles/Tags";

function Tags({ tags }) {
  return (
    <TagsWrapper data-testid="tags">
      {tags.map(tag => (
        <div key={tag} className="tag">
          <span>{tag}</span>
        </div>
      ))}
    </TagsWrapper>
  );
}

export default memo(Tags);
